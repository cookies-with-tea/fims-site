from rest_framework import serializers


# -------------------------------------------------
# Film
# -------------------------------------------------
from film.models import Film, Genre, People


class GenreOnFilmSerializers(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('id', 'title',)


class PeopleOnFilmSerializers(serializers.ModelSerializer):

    class Meta:
        model = People
        fields = ('id', 'first_name', 'last_name',)


class FilmRetrieveSerializers(serializers.ModelSerializer):
    genre = GenreOnFilmSerializers(many=True)
    starring = PeopleOnFilmSerializers(many=True)

    class Meta:
        model = Film
        fields = ('id', 'title', 'cover', 'year', 'country', 'genre',
                  'starring', 'description', 'age', 'time', 'rating',)


class FilmListSerializers(serializers.ModelSerializer):
    genre = GenreOnFilmSerializers(many=True)

    class Meta:
        model = Film
        fields = ('id', 'title', 'cover_mini', 'year', 'country', 'genre',
                  'description', 'age', 'time', 'rating',)


class FilmAllFieldsSerializers(serializers.ModelSerializer):
    rating = serializers.ReadOnlyField()

    class Meta:
        model = Film
        fields = '__all__'
