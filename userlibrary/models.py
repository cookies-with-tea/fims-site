from django.db import models

from film.models import Film
from user.models import User


class UserLibrary(models.Model):
    owner = models.ForeignKey(User, verbose_name='Владелец библиотеки', on_delete=models.CASCADE,)
    films = models.ManyToManyField('UserFilm', verbose_name='Фильм', blank=True, related_name='Фильм',)

    class Meta:
        verbose_name = 'Библиотка пользователя'
        verbose_name_plural = 'Библиотеки пользователей'

    def __str__(self):
        return f'Библиотека - {self.owner}'

    def add_user_film(self, film):
        self.films.add(film)


class UserFilm(models.Model):

    RATING_1_5 = (
        ('1', 'terribly'),
        ('2', 'bad'),
        ('3', 'ok'),
        ('4', 'good'),
        ('5', 'amazing')
    )

    owner = models.ForeignKey(User, verbose_name='Владелец библиотеки', on_delete=models.CASCADE,)
    library = models.ForeignKey(UserLibrary, verbose_name='Библиотека',
                                on_delete=models.CASCADE, related_name='Библиотека')
    film = models.ForeignKey(Film, verbose_name='Фильм', on_delete=models.CASCADE)
    favorite = models.BooleanField('Избранная', default=False,)
    rating = models.CharField('Рейтинг фильма', max_length=25, choices=RATING_1_5, null=True, blank=True,)
    in_plans = models.BooleanField('В планах', default=False,)
    viewed = models.BooleanField('Просмотренно ранее', default=False,)

    class Meta:
        verbose_name = 'Фильм в библиотеки'
        verbose_name_plural = 'Фильмы библиотеки '

    def __str__(self):
        return f'Фильм в библиотеки под названием- "{self.film.title}"'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.library.add_user_film(self)
