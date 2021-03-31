from rest_framework import generics
from .models import Starships
from .serializers import *
from rest_framework.permissions import IsAdminUser


class StarshipsListView(generics.ListAPIView):
    serializer_class = StarshipsListSerializer
    queryset = Starships.objects.all()


class StarshipsDetailView(generics.RetrieveAPIView):
    serializer_class = StarshipsDetailSerializer
    queryset = Starships.objects.all()


class StarshipsCreateView(generics.CreateAPIView):
    serializer_class = StarshipsDetailSerializer
    permission_classes = (IsAdminUser,)
