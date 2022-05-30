from django.db import models

from film.models import Film
from user.models import User


class Latter(models.Model):

    subject = models.CharField(max_length=75)
    message = models.TextField(max_length=1024)
    attachments = models.FileField(null=True, blank=True)

    class Meta:
        abstract = True


class MailingLetters(Latter):

    send = (
        ('SEND', 'Отправить'),
        ('Draft', 'Черновик'),
    )

    users = models.ManyToManyField(User)
    is_send = models.CharField(choices=send, max_length=255)

    class Meta:
        verbose_name = 'Писмь админа'
        verbose_name_plural = 'Письма админа'


class CustomerLetters(Latter):

    user = models.ForeignKey(User, on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Писмо от пользователя'
        verbose_name_plural = 'Письма от пользвателей'
