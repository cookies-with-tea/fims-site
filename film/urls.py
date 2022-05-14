from django.urls import path

from film.views import FilmRetrieveAPIView, FilmListAPIView, FilmCreateAPIView, FilmRUDOFAdminAPIView

urlpatterns = [
    path('<int:pk>/', FilmRetrieveAPIView.as_view()),
    path('home/', FilmListAPIView.as_view()),
    path('createfilm/', FilmCreateAPIView.as_view()),
    path('updatedeletefilm/<int:pk>', FilmRUDOFAdminAPIView.as_view()),
]
