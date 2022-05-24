from django.urls import path

from userlibrary.views import UserFilmListAPIView

urlpatterns = [
    path('', UserFilmListAPIView.as_view()),

]
