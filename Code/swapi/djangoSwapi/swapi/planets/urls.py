from django.urls import path
from .views import *

app_name = 'planets'
urlpatterns = [
    path('', PlanetsListView.as_view()),
    path('<int:pk>/', PlanetsDetailView.as_view()),
    path('create/', PlanetsCreateView.as_view()),
]
