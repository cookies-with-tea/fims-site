from rest_framework import serializers

from sendemail.models import CustomerLetters
from user.models import User


class UserLettersSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'status', 'phone', 'address',)


class LettersSerializer(serializers.ModelSerializer):

    user = UserLettersSerializer(read_only=True)

    class Meta:
        model = CustomerLetters
        fields = ('subject', 'message', 'attachments', 'user')
