from userlibrary.models import UserFilm


class FilmRating:

    def average_rating(self, is_film):
        all_rating, k = 0, 0
        user_f = UserFilm.objects.filter(film=is_film).values('rating')
        for i in user_f:
            all_rating += int(i['rating'])
            k += 1
        rating = all_rating // k
        return rating
