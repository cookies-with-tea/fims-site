from django.contrib import admin
from django.utils.safestring import mark_safe

from film.models import Film, Award, Genre, People, Comment


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('title', 'get_image', 'country', 'age', 'rating',)
    readonly_fields = ('get_image',)
    search_fields = ('title', )
    ordering = ('title', )
    save_as = True

    def get_image(self, obj):
        try:
            return mark_safe(f'<img src={obj.cover.url} width="150" height="100"')
        except ValueError:
            return None

    get_image.short_description = 'Обложка фильма'


@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ('title', 'get_image', 'year',)
    readonly_fields = ('get_image',)
    search_fields = ('title', 'year',)
    ordering = ('title', 'year',)

    def get_image(self, obj):
        try:
            return mark_safe(f'<img src={obj.photo.url} width="150" height="100"')
        except ValueError:
            return None

    get_image.short_description = 'Фотография наград'


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)
    ordering = ('title',)


@admin.register(People)
class PeopleAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'get_image', 'date_of_birth',)
    readonly_fields = ('get_image',)
    search_fields = ('first_name', 'last_name',)
    ordering = ('first_name', 'last_name', 'date_of_birth',)

    def get_image(self, obj):
        try:
            return mark_safe(f'<img src={obj.photo.url} width="150" height="100"')
        except ValueError:
            return None

    get_image.short_description = 'Фотография Человека'


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('owner', 'film', 'created_at', 'active',)
    search_fields = ('owner', 'film',)
    ordering = ('owner', 'film',)
