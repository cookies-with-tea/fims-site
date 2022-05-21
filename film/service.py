from userlibrary.models import UserFilm


def average_rating(is_film):
    all_rating, count = 0, 0
    user_f = UserFilm.objects.filter(film=is_film).values('rating')
    count = len(user_f)
    for i in user_f:
        all_rating += int(i['rating'])
    rating = all_rating // count
    return rating
