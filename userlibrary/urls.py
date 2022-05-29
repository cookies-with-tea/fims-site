from django.urls import path

from userlibrary.views import UserLibraryViewSets

user_library_list = UserLibraryViewSets.as_view({
        'get': 'list',
    })

urlpatterns = [
    path('library-list/', user_library_list, name='user_library-list'),

]
