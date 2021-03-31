from rest_framework import serializers

from .models import Starships


class StarshipsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Starships
        fields = '__all__'


class StarshipsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Starships
        fields = '__all__'
