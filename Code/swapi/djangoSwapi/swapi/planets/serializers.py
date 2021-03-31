from rest_framework import serializers

from .models import Planets


class PlanetsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planets
        fields = '__all__'


class PlanetsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planets
        fields = '__all__'
