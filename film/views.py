from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, status
from rest_framework.response import Response

from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.views import APIView
from rest_framework import viewsets

from film.permissions import IsOwnerOrAdmin
from film.serializers import FilmRetrieveSerializers, FilmListSerializers, FilmAllFieldsSerializers, \
    CommentAllFieldsSerializers, FilmSuggestSerializer, FilmSuggestAdminSerializer
from film.models import Film, SuggestedFilm
from film.service import film_accepted
from userlibrary.service import AddUserFilmService


class FilmRetrieveAPIView(APIView):
    permissions = (AllowAny,)

    def get(self, request, *args, **kwargs):
        film = Film.objects.\
            filter(pk=kwargs['pk']).\
            prefetch_related('comment__owner')\
            .only('title',
                  'cover',
                  'year',
                  'country',
                  'genre__title',
                  'starring__id',
                  'starring__first_name',
                  'starring__last_name',
                  'description',
                  'age',
                  'time',
                  'rating',)
        serializer = FilmRetrieveSerializers(film, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = CommentAllFieldsSerializers(data=request.data)
        film = Film.objects.get(pk=kwargs['pk'])
        # не допускать сюда анонимов
        if serializer.is_valid():
            serializer.validated_data['owner'] = request.user
            serializer.validated_data['film'] = film
            serializer.save()
            AddUserFilmService.create_user_library(self, request, film, serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FilmRUDOFAdminAPIView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Film.objects.prefetch_related('genre', 'starring', 'awards')
    serializer_class = FilmAllFieldsSerializers
    permission_classes = (IsAdminUser,)


class FilmListAPIView(generics.ListAPIView):

    queryset = Film.objects.\
        all().\
        only('id',
             'title',
             'cover_mini',
             'year',
             'country',
             'genre',
             'description',
             'age',
             'time',
             'rating',)
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


class SuggestedFilmViewSets(viewsets.ModelViewSet):

    serializer_class = {
        'list': FilmSuggestSerializer,
        'retrieve': FilmSuggestAdminSerializer,
        'create': FilmSuggestSerializer,
        'update': FilmSuggestAdminSerializer,
        'destroy': FilmSuggestAdminSerializer,
    }

    default_serializer_class = FilmSuggestSerializer

    def get_queryset(self):
        return SuggestedFilm.objects.all()

    def get_serializer_class(self):
        return self.serializer_class.get(self.action, self.default_serializer_class)

    def get_permissions(self):
        if self.action == 'retrieve' or self.action == 'destroy':
            permissions_classes = [IsOwnerOrAdmin]
        elif self.action == 'create':
            permissions_classes = [IsAuthenticated]
        else:
            permissions_classes = [IsAdminUser]
        return [permission() for permission in permissions_classes]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data['owner'] = request.user
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        update = super().update(request, *args, **kwargs)
        if update.data['is_published']:
            film_accepted(update)
        return update

















