# flake8: noqa

from django.shortcuts import render  # type: ignore
from rest_framework import generics, permissions  # type: ignore
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView  # type: ignore
from .models import Product, Cart, CartItem, ProductReview, StoreReview
from .serializers import ProductSerializer, CartItemSerializer, ProductReviewSerializer, StoreReviewSerializer
from django.contrib.sessions.models import Session  # type: ignore
from rest_framework.views import APIView  # type: ignore
from rest_framework.response import Response  # type: ignore
from rest_framework import status  # type: ignore


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class AddToCartView(APIView):
    def post(self, request, product_id):
        session_key = request.session.session_key or request.session.create()
        
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(user=request.user)
            if cart.session_key:
                cart.session_key = None
                cart.save()
                
        else:
            cart, created = Cart.objects.get_or_create(session_key=session_key, user=None)

        cart_item, created = CartItem.objects.get_or_create(cart=cart, product_id=product_id)
        if not created:
            cart_item.quantity += 1
        cart_item.save()

        return Response({"message": "Item added to cart"}, status=status.HTTP_200_OK)


class CurrentCartView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(user=request.user)
        else:
            session_key = request.session.session_key or request.session.create()
            cart, created = Cart.objects.get_or_create(session_key=session_key, user=None)

        cart_items = CartItem.objects.filter(cart=cart)
        serializer = CartItemSerializer(cart_items, many=True)

        return Response({
            "cart_id": cart.id,
            "items": serializer.data
        }, status=status.HTTP_200_OK)


class ProductReviewListCreateView(generics.ListCreateAPIView):
    queryset = ProductReview.objects.all()
    serializer_class = ProductReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProductReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductReview.objects.all()
    serializer_class = ProductReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return ProductReview.objects.filter(user=self.request.user)
        return super().get_queryset()


class StoreReviewListCreateView(ListCreateAPIView):
    queryset = StoreReview.objects.all()
    serializer_class = StoreReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class StoreReviewDetailView(RetrieveUpdateDestroyAPIView):
    queryset = StoreReview.objects.all()
    serializer_class = StoreReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return StoreReview.objects.filter(user=self.request.user)
        return super().get_queryset()