from django.db import models


def get_img_path(instance, filename):
    try:
        id = Starships.objects.all().last().id + 1
    except:
        id = 1
    return f'image/starships/{id}.jpg'


class Starships(models.Model):
    name = models.CharField(max_length=255, verbose_name="name")
    model = models.CharField(max_length=255, verbose_name="model")
    manufacturer = models.CharField(max_length=255, verbose_name="manufacturer")
    image = models.ImageField(blank=True, null=True,
                              upload_to=get_img_path, verbose_name="image")
