from rest_framework import generics
from .models import Planets
from .serializers import *
from rest_framework.permissions import IsAdminUser



class PlanetsListView(generics.ListAPIView):
    serializer_class = PlanetsListSerializer
    queryset = Planets.objects.all()


class PlanetsDetailView(generics.RetrieveAPIView):
    serializer_class = PlanetsDetailSerializer
    queryset = Planets.objects.all()


class PlanetsCreateView(generics.CreateAPIView):
    serializer_class = PlanetsDetailSerializer
    permission_classes = (IsAdminUser,)
