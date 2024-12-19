# flake8: noqa
from django.contrib import admin  # type: ignore
from .models import Product, Category, Cart, CartItem, ProductReview, StoreReview, BaseReview

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(ProductReview)
admin.site.register(StoreReview)