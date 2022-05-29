from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets

from userlibrary.models import UserFilm
from userlibrary.permissions import IsOwnerOrAdminReadOnly
from userlibrary.serializers import UserFilmSerializers


class UserLibraryViewSets(viewsets.ModelViewSet):

    serializer_class = UserFilmSerializers
    permission_classes = (IsOwnerOrAdminReadOnly,)

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]

    filter_fields = ['film', 'favorite', 'rating', 'in_plans', 'viewed']
    search_fields = ['film', 'rating']
    ordering_fields = ['id', 'rating']

    def get_queryset(self):
        queryset = UserFilm.objects.filter(owner=self.request.user)
        return queryset
