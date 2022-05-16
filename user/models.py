from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models


class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None):

        if username is None:
            raise TypeError('User must have a username')
        if email is None:
            raise TypeError('User must have a email')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password):

        if password is None:
            raise TypeError('Superuser must have a password')

        user = self.create_user(username, email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):

    """ Custom User model """

    username = models.CharField('Имя пользователя', max_length=255, db_index=True, unique=True)
    email = models.EmailField('Почта', max_length=255, db_index=True, unique=True)
    status = models.CharField('Пользовательский статус', max_length=255, null=True, blank=True, default=None,
                              help_text='Статус, кторый может ввести пользователь, например:'
                                        ' "У меня сегодня отличное настроение"')
    is_active = models.BooleanField('Состояние профиля пользвателя', default=True,)
    is_staff = models.BooleanField('Права администрации', default=False)
    created_at = models.DateTimeField('Время создания', auto_now_add=True)
    updated_at = models.DateTimeField('Время последнего обновления', auto_now=True)
    avatar = models.ImageField('Фото пользователя',
                               upload_to='photo/avatar/%Y/%m/%d', null=True, blank=True, default=None)
    phone = models.CharField('Номер телефона', max_length=20, null=True, blank=True, default=None)
    address = models.CharField('Адрес', max_length=255, blank=True, null=True, default=None)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f'Пользователь - {self.email} ({self.username})'

    def save(self, *args, **kwargs):
        from userlibrary.models import UserLibrary
        super().save(*args, **kwargs)
        UserLibrary.objects.create(owner=self)

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username
