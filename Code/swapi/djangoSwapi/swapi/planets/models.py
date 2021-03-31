from django.db import models


def get_img_path(instance, filename):
    try:
        id = Planets.objects.all().last().id + 1
    except:
        id = 1
    return f'image/planets/{id}.jpg'


class Planets(models.Model):
    name = models.CharField(max_length=255, verbose_name="name")
    population = models.CharField(max_length=255, verbose_name="population")
    rotationPeriod = models.IntegerField(verbose_name="rotationPeriod")
    diameter = models.IntegerField(verbose_name="diameter")
    image = models.ImageField(blank=True, null=True,
                              upload_to=get_img_path, verbose_name="image")
