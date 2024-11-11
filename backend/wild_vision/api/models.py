# flake8: noqa 
from django.db import models  # type: ignore
from django.conf import settings  # type: ignore
from django.contrib.auth.models import User, AbstractUser  # type: ignore


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


class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True, verbose_name="Номер телефона")


class Cart(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE)
    session_key = models.CharField(max_length=40, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Корзина {self.id}"
    
    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.product} в корзине {self.cart}'
    
    class Meta:
        verbose_name = 'Товар в корзине'
        verbose_name_plural = 'Товары в корзине'
