# flake8: noqa
from django.urls import path  # type: ignore
from .views import ( 
    ProductListView, 
    ProductDetailView, 
    AddToCartView, 
    CurrentCartView, 
    ProductReviewListCreateView, 
    ProductReviewDetailView, 
    StoreReviewDetailView, 
    StoreReviewListCreateView
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('cart/add/', AddToCartView.as_view(), name='add-to-cart'),
    path('cart/', CurrentCartView.as_view(), name='current-cart'),
    path('product-reviews/', ProductReviewListCreateView.as_view(), name='product-review-list-create'),
    path('product-reviews/<int:pk>/', ProductReviewDetailView.as_view(), name='product-review-detail'),
    path('store-reviews/', StoreReviewListCreateView.as_view(), name='store-review-list-create'),
    path('store-reviews/<int:pk>/', StoreReviewDetailView.as_view(), name='store-review-detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)