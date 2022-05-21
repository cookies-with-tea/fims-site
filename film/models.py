from django.db import models


from user.models import User


class Award(models.Model):
    title = models.CharField('Название награды', max_length=255)
    photo = models.ImageField('Фото награды', upload_to='photo/award/%Y/%m/%d', null=True, blank=True,)
    description = models.TextField('Описание награды', max_length=1024)
    year = models.PositiveIntegerField('Год выпуска награды',)
    slug = models.SlugField(('Слаг награды'), max_length=255, unique=True, db_index=True, )

    class Meta:
        verbose_name = 'Награда'
        verbose_name_plural = 'Награды'

    def __str__(self):
        return f'{self.title}({self.year})'


class Genre(models.Model):
    title = models.CharField('Название жанра', max_length=255, unique=True,)
    description = models.TextField('Описание жанра', max_length=1024, null=True, blank=True,)
    slug = models.SlugField(('Слаг жанра'), max_length=255, unique=True, db_index=True,)

    class Meta:
        verbose_name = 'Жанр'
        verbose_name_plural = 'Жанры'

    def __str__(self):
        return f'{self.title}'


class People(models.Model):

    # PROFESSION_CHOICES = (
    #     ('1', 'STARRING'),
    #     ('2', 'DIRECTOR'),
    #     ('3', 'PRODUCER'),
    #     ('4', 'OPERATOR'),
    #     ('5', 'COMPOSER'),
    #     ('6', 'MOUNTING'),
    # )

    first_name = models.CharField('Имя', max_length=255,)
    last_name = models.CharField('Фамилия', max_length=255,)
    photo = models.ImageField('Фото', upload_to='photo/people/%Y/%m/%d', null=True, blank=True,)
    date_of_birth = models.DateTimeField('Дата рождения',)
    # profession = models.CharField('Професси', choices=PROFESSION_CHOICES, max_length=255)
    award = models.ManyToManyField('Award', verbose_name='Награды', blank=True)
    slug = models.SlugField(('Слаг человека'), max_length=255, unique=True, db_index=True, )

    class Meta:
        verbose_name = 'Человек'
        verbose_name_plural = 'Люди'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Film(models.Model):
    title = models.CharField('Название', max_length=255,)
    cover = models.ImageField('Основная обложка фильма', upload_to='photo/cover/%Y/%m/%d', null=True, blank=True,
                              help_text='Большой постер фильма(рекомендуемый размер загрузки '
                                        '- 485x600)')
    cover_mini = models.ImageField('Миниатюрная обложка фильма', upload_to='photo/cover_mini/%Y/%m/%d', null=True, blank=True,
                                   help_text='Маленький постер фильма, который можно указать в ленте'
                                             'пользователя или в категории - "ТОП - 10"(рекомендуемый размер'
                                             'загрузки- 259x29)')

    description = models.TextField('Описание фильма', max_length=1024, null=True, blank=True,)
    country = models.CharField('Страна производства', max_length=255, null=True, blank=True,)
    year = models.PositiveIntegerField('Год выпуска фильма',)
    genre = models.ManyToManyField(Genre, verbose_name='Жанры фильма', blank=True,)
    starring = models.ManyToManyField(People, verbose_name='Главные актеры', related_name='starring', blank=True,)
    age = models.PositiveSmallIntegerField('Возростное ограничение',)
    time = models.FloatField('Время показа',)
    rating = models.CharField('Рэйтинг', null=True, blank=True, max_length=255,
                              help_text='Рейтинг филмьа согласно какому-либо изданию(кинопоиск и тд...)')
    awards = models.ManyToManyField(Award, verbose_name='Награды фильма', blank=True,)
    slug = models.SlugField(('Слаг фильма'), max_length=255, unique=True, db_index=True,)

    class Meta:
        verbose_name = 'Фильм'
        verbose_name_plural = 'Фильмы'

    def __str__(self):
        return f'{self.title}: {self.year}'

    def update_rating(self, is_film, *args, **kwargs):
        from film.service import average_rating
        self.rating = average_rating(is_film)
        super().save(*args, **kwargs)


class Comment(models.Model):
    RATING_1_5 = (
        ('1', 'terribly'),
        ('2', 'bad'),
        ('3', 'ok'),
        ('4', 'good'),
        ('5', 'amazing')
    )

    owner = models.ForeignKey(User, verbose_name='Автор комментария', on_delete=models.CASCADE,
                              null=True, blank=True,)
    film = models.ForeignKey(Film, verbose_name='Комменитрованный фильм', on_delete=models.CASCADE,
                             related_name='comment')
    body = models.TextField('Тело текста', max_length=1024,)
    created_at = models.DateTimeField('Время создания комментария', auto_now_add=True,)
    updated_at = models.DateTimeField('Время последнего обновления комментария', auto_now=True,)
    active = models.BooleanField('Состояние комментария', default=True,)
    rating = models.CharField('Рейтинг фильма', max_length=25, choices=RATING_1_5, null=True, blank=True,)
    parent = models.ForeignKey('self', verbose_name='Родитель', blank=True, null=True, on_delete=models.SET_NULL,)

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'

    def __str__(self):
        return f'Комментатор дает - {self.owner} к фильму - "{self.film}"'
