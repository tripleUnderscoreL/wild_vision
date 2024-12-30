# flake8: noqa 
from django.db import models  # type: ignore
from django.conf import settings  # type: ignore
from django.contrib.auth.models import User, AbstractUser  # type: ignore


def product_image_path(instance, filename):
    return f'product_{instance.id}/{filename}'

def category_image_path(instance, filename):
    return f'category_{instance.id}/{filename}'

def product_review_image_path(instance, filename):
    return f'product_{instance.product.id}/reviews/{filename}'

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True, verbose_name='Описание')
    image = models.ImageField(upload_to='category_images/', blank=True, null=True, verbose_name='Изображение')
    
    def save(self, *args, **kwargs):
        if self._state.adding and self.image:
            temp_image = self.image
            self.image = None
            super().save(*args, **kwargs)
            self.image = temp_image

        super().save(*args, **kwargs)

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
    features = models.JSONField(default=dict, blank=True)
    
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
    address = models.TextField(blank=True, null=True, verbose_name="Адрес")


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


class BaseReview(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    review_text = models.TextField()
    rating = models.PositiveSmallIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True


class ProductReview(BaseReview):
    product = models.ForeignKey('Product', related_name='reviews', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=product_review_image_path, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self._state.adding and self.image:
            temp_image = self.image
            self.image = None
            super().save(*args, **kwargs)
            self.image = temp_image

        super().save(*args, **kwargs)

    class Meta:
        unique_together = ('product', 'user')
        ordering = ['-created_at']
        verbose_name = "Отзыв на товары"
        verbose_name_plural = "Отзывы на товары"

    def __str__(self):
        return f"Отзыв на \"{self.product.name}\" № {self.id}"


class StoreReview(BaseReview):
    rating = None

    class Meta:
        verbose_name = "Отзыв на магазин"
        verbose_name_plural = "Отзывы на магазин"

    def __str__(self):
        return f"Отзыв на магазин № {self.id}"
    