from rest_framework import serializers

from film.models import Film, Genre, People, Comment


# -------------------------------------------------
# Comment
# -------------------------------------------------

class CommentOnFilmSerializers(serializers.ModelSerializer):
    """Comment Film """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Comment
        fields = '__all__'


class CommentAllFieldsSerializers(serializers.ModelSerializer):
    """Comment Create """

    class Meta:
        model = Comment
        fields = ('body', 'rating', 'parent',)


# -------------------------------------------------
# Film
# -------------------------------------------------


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
    comment = CommentOnFilmSerializers(many=True)

    class Meta:
        model = Film
        fields = ('id', 'title', 'cover', 'year', 'country', 'genre',
                  'starring', 'description', 'age', 'time', 'rating',
                  'comment',)


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
