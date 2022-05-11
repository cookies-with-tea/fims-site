from django.contrib import admin
from django.utils.safestring import mark_safe

from film.models import Film


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('title', 'year', 'country', 'age', 'rating',)
    search_fields = ('title', 'year',)
    ordering = ('title', 'year',)
    save_as = True

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.cover_mini.url} width="150" height="100"')

    get_image.short_description = 'Обложка фильма'
