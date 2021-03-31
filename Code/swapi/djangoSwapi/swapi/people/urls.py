from django.urls import path
from .views import *

app_name = 'people'
urlpatterns = [
    path('', PeopleListView.as_view()),
    path('<int:pk>/', PeopleDetailView.as_view()),
    path('create/', PeopleCreateView.as_view()),
]
