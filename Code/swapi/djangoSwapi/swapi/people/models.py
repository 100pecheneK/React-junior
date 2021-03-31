from django.db import models
from model_utils import Choices
from rest_framework import serializers


def get_img_path(instance, filename):
    try:
        id = People.objects.all().last().id + 1
    except:
        id = 1
    return f'image/people/{id}.jpg'


class People(models.Model):
    name = models.CharField(max_length=255, verbose_name="name")
    GENDER = Choices(
        ('M', 'Male'),
        ('F', 'Female'),
        ('N', 'N/A')
    )
    gender = models.CharField(max_length=1, choices=GENDER, default=GENDER.N)
    birthYear = models.CharField(max_length=255, verbose_name="birthYear")
    eyeColor = models.CharField(max_length=255, verbose_name="eyeColor")
    image = models.ImageField(blank=True, null=True,
                              upload_to=get_img_path, verbose_name="image")
