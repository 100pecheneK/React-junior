from django.urls import path
from .views import *

app_name = 'Starships'
urlpatterns = [
    path('', StarshipsListView.as_view()),
    path('<int:pk>/', StarshipsDetailView.as_view()),
    path('create/', StarshipsCreateView.as_view()),
]
