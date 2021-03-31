from rest_framework import generics
from .models import People
from .serializers import *
from rest_framework.permissions import IsAdminUser



class PeopleListView(generics.ListAPIView):
    serializer_class = PeopleListSerializer
    queryset = People.objects.all()


class PeopleDetailView(generics.RetrieveAPIView):
    serializer_class = PeopleDetailSerializer
    queryset = People.objects.all()


class PeopleCreateView(generics.CreateAPIView):
    serializer_class = PeopleDetailSerializer
    permission_classes = (IsAdminUser,)
