"""noname URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    # DJANGO
    path('admin/', admin.site.urls),
    # OAUTH
    # path('oauth/', include('social_django.urls', namespace='social')),
    # DJOSER
    path('auth/', include('djoser.urls')),
    re_path('auth/', include('djoser.urls.authtoken')),
    # SWAGGER
    path('swagger/', schema_view),
    # MY_APP
    path('film/', include('film.urls')),
    path('library/', include('userlibrary.urls')),


]

if settings.DEBUG:
    import debug_toolbar
    import mimetypes

    mimetypes.add_type("application/javascript", ".js", True)

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns = [
                      path('__debug__/', include(debug_toolbar.urls))
                  ] + urlpatterns
