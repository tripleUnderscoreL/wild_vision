# flake8: noqa 
from django.db import models  # type: ignore


def product_image_path(instance, filename):
    return f'product_{instance.id}/{filename}'


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=product_image_path, height_field=None, width_field=None, max_length=100, null=True)

    def save(self, *args, **kwargs):
        if self._state.adding and self.image:
            temp_image = self.image
            self.image = None
            super().save(*args, **kwargs)
            self.image = temp_image

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    
    class Meta():
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
