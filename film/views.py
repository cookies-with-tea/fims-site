from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics


from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser

from film.permissions import IsAdminOrReadOnly
from film.serializers import FilmRetrieveSerializers, FilmListSerializers, FilmAllFieldsSerializers
from film.models import Film


class FilmRetrieveAPIView(generics.RetrieveAPIView):

    queryset = Film.objects.all()\
        .only('title', 'cover', 'year', 'country', 'genre__title', 'starring__id',
              'starring__first_name', 'starring__last_name', 'description', 'age', 'time', 'rating')
    serializer_class = FilmRetrieveSerializers
    permission_classes = (AllowAny,)


class FilmRUDOFAdminAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Film.objects.prefetch_related('genre', 'starring', 'awards')
    serializer_class = FilmAllFieldsSerializers
    permission_classes = (IsAdminUser,)


class FilmListAPIView(generics.ListAPIView):

    queryset = Film.objects.all().\
        only('id', 'title', 'cover_mini', 'year', 'country', 'genre',
             'description', 'age', 'time', 'rating')
    serializer_class = FilmListSerializers
    permission_classes = (IsAuthenticated,)
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ['year', 'country', 'age', 'rating', 'genre']
    search_fields = ['id', 'title']
    ordering_fields = ['id', 'year', 'title', 'age', 'rating']


class FilmCreateAPIView(generics.CreateAPIView):

    queryset = Film
    serializer_class = FilmAllFieldsSerializers
    permission_classes = (IsAdminUser,)

