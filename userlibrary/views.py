from rest_framework.response import Response
from rest_framework.views import APIView


from userlibrary.models import UserFilm
from userlibrary.serializers import UserFilmSerializers


class UserFilmListAPIView(APIView):

    def get(self, request, *args, **kwargs):
        films = UserFilm.objects.\
            filter(owner=request.user,
                   favorite=True)
        serializer = UserFilmSerializers(films, many=True)
        return Response(serializer.data)
