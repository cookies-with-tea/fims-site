from django.db import models


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

    PROFESSION_CHOICES = (
        ('1', 'STARRING'),
        ('2', 'DIRECTOR'),
        ('3', 'PRODUCER'),
        ('4', 'OPERATOR'),
        ('5', 'COMPOSER'),
        ('6', 'MOUNTING'),
    )

    first_name = models.CharField('Имя', max_length=255,)
    last_name = models.CharField('Фамилия', max_length=255,)
    date_of_birth = models.DateTimeField('Дата рождения',)
    profession = models.CharField('Професси', choices=PROFESSION_CHOICES, max_length=255)
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
                                        '- "Тут должен быть размер загрузки, который мне скажут с Front")')
    covet_mini = models.ImageField('Миниатюрная обложка фильма', upload_to='photo/cover_mini', null=True, blank=True,
                                   help_text='Маленький постер фильма, который можно указать в ленте'
                                             'пользователя или в категории - "ТОП - 10"(рекомендуемый размер'
                                             'загрузки-"Тут должен быть размер загрузки, который мне скажут с Front"))')

    description = models.TextField('Описание фильма', max_length=1024, null=True, blank=True,)
    year = models.DateTimeField('Год выпуска фильма',)
    country = models.CharField('Страна производства', max_length=255, null=True, blank=True,)
    genre = models.ManyToManyField(Genre, verbose_name='Жанры фильма', blank=True,)
    starring = models.ManyToManyField(People, verbose_name='Главные актеры', related_name='starring', blank=True,)
    director = models.ManyToManyField(People, verbose_name='Режисер фильма', related_name='director', blank=True,)
    operator = models.ManyToManyField(People, verbose_name='Оператор фильма', related_name='operator', blank=True,)
    producer = models.ManyToManyField(People, verbose_name='Продюсер фильма', related_name='producer', blank=True,)
    composer = models.ManyToManyField(People, verbose_name='Композитор фильма', related_name='composer', blank=True,)
    mounting = models.ManyToManyField(People, verbose_name='Монтажер фильма', related_name='mounting', blank=True,)
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























