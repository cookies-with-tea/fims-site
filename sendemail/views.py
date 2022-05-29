from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from sendemail.serializers import LettersSerializer


class CreateCustomerLettersAPIView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, *args, **kwargs):
        serializer = LettersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['user'] = request.user
            serializer.save()
            send_mail(str(serializer.data['subject']), str(serializer.data['message']), request.user.email,
                      [settings.EMAIL_HOST_USER])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
