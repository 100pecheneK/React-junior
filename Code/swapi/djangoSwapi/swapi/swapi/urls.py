from django.conf import settings
from django.conf.urls import url
from django.contrib import admin
from django.views.static import serve
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/people/', include('people.urls')),
    path('api/v1/planets/', include('planets.urls')),
    path('api/v1/starships/', include('starships.urls')),

    path('api/v1/base-auth/', include('rest_framework.urls')),
]

if settings.DEBUG:
    urlpatterns += [
        url(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    ]
