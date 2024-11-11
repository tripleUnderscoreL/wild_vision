# flake8: noqa
from django.urls import path  # type: ignore
from .views import ProductListView, ProductDetailView, AddToCartView, CurrentCartView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('cart/add/<int:product_id>/', AddToCartView.as_view(), name='add-to-cart'),
    path('cart/', CurrentCartView.as_view(), name='current-cart'),
]