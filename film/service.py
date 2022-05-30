from film.models import Film
from userlibrary.models import UserFilm


def average_rating(is_film):
    all_rating = 0
    user_f = UserFilm.objects.filter(film=is_film).values('rating')
    count = len(user_f)
    for i in user_f:
        all_rating += int(i['rating'])
    rating = all_rating // count
    return rating


def film_accepted(update):
    film = Film.objects.create(
        title=update.data['title'],
        cover=update.data['cover'],
        cover_mini=update.data['cover_mini'],
        description=update.data['description'],
        country=update.data['country'],
        year=update.data['year'],
        age=update.data['age'],
        time=update.data['time'],
    )
    film.genre.set(update.data['genre'])
    film.starring.set(update.data['starring'])
    film.awards.set(update.data['awards'])
