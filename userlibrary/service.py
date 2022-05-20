
class AddUserFilmService:

    def create_user_library(self, request, film, serializer):
        from userlibrary.models import UserFilm, UserLibrary
        library = UserLibrary.objects.get(owner=request.user)
        UserFilm.objects.get_or_create(owner=request.user,
                                        library=library,
                                        film=film,
                                        rating=serializer.validated_data['rating'])
        film.update_rating(film)
