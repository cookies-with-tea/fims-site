from django.contrib import admin

from userlibrary.models import UserLibrary, UserFilm


@admin.register(UserLibrary)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', )
    list_display_links = ('id', 'owner',)
    search_fields = ('id', 'owner', 'films',)
    ordering = ('owner', 'films',)


@admin.register(UserFilm)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', 'film', 'favorite', 'rating', 'in_plans', 'viewed',)
    list_display_links = ('id', 'owner',)
    search_fields = ('id', 'owner',)
    list_filter = ('favorite', 'rating', 'in_plans', 'viewed', 'rating',)
    ordering = ('owner', )
    list_editable = ('favorite', 'rating', 'in_plans', 'viewed',)
