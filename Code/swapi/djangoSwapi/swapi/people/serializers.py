from rest_framework import serializers

from serializer_snippets.DisplayNameWrittableField import DisplayNameWritableField
from .models import People


class PeopleListSerializer(serializers.ModelSerializer):
    gender = DisplayNameWritableField()

    class Meta:
        model = People
        fields = '__all__'


class PeopleDetailSerializer(serializers.ModelSerializer):
    gender = DisplayNameWritableField()

    class Meta:
        model = People
        fields = '__all__'
