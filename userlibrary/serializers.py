from rest_framework import serializers

from film.models import Genre, Film
from userlibrary.models import UserFilm


class GenreOnFilmSerializers(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('id', 'title',)


class FilmListSerializers(serializers.ModelSerializer):
    genre = GenreOnFilmSerializers(many=True)

    class Meta:
        model = Film
        fields = ('id', 'title', 'cover_mini', 'year', 'country', 'genre',
                  'description', 'age', 'time', 'rating',)


class UserFilmSerializers(serializers.ModelSerializer):
    film = FilmListSerializers()

    class Meta:
        model = UserFilm
        fields = ('film', 'favorite', 'rating', 'in_plans', 'viewed',)


class UserFilmUpdateSerializers(serializers.ModelSerializer):

    class Meta:
        model = UserFilm
        fields = ('favorite', 'rating', 'in_plans', 'viewed',)
