from django.urls import path

from film.views import FilmRetrieveAPIView, FilmListAPIView, FilmCreateAPIView, FilmRUDOFAdminAPIView, \
    SuggestedFilmViewSets

suggest_film_list = SuggestedFilmViewSets.as_view({
    'get': 'list',
})

suggest_film_create = SuggestedFilmViewSets.as_view({
    'post': 'create',
})

suggest_film_change = SuggestedFilmViewSets.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy',
})

urlpatterns = [
    path('<int:pk>/', FilmRetrieveAPIView.as_view()),
    path('home/', FilmListAPIView.as_view()),
    path('createfilm/', FilmCreateAPIView.as_view()),
    path('updatedeletefilm/<int:pk>', FilmRUDOFAdminAPIView.as_view()),

    path('suggest_film/', suggest_film_list, name='suggest_film'),
    path('suggest_film-create/', suggest_film_create, name='suggest_film-create'),
    path('suggest_film-change/<int:pk>', suggest_film_change, name='suggest_film-change'),

]
