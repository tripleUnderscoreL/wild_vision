# flake8: noqa

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, permissions
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Category, Product, Cart, CartItem, ProductReview, StoreReview
from .serializers import ProductSerializer, CartSerializer, ProductReviewSerializer, StoreReviewSerializer, CategorySerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class AddToCartView(APIView):
    def post(self, request):
        product_id = request.data.get('product_id')
        quantity = int(request.data.get('quantity', 1)) 
        if not product_id or quantity <= 0:
            return Response({"error": "необходимо указать правильный id товара и его количество"}, status=status.HTTP_400_BAD_REQUEST)

        if request.user.is_authenticated:
            cart, created = Cart.objects.get_or_create(user=request.user)
            if cart.session_key:
                cart.session_key = None
                cart.save()
        else:
            session_key = request.session.session_key or request.session.create()
            cart, created = Cart.objects.get_or_create(session_key=session_key, user=None)

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({"error": "товар не найден"}, status=status.HTTP_404_NOT_FOUND)

        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)

        if not created:
            cart_item.quantity += quantity 
        else:
            cart_item.quantity = quantity
        
        cart_item.save()

        return Response({
            "message": f"{product.name} добавлен в корзину",
            "cart_id": cart.id,
            "product": product.name,
            "quantity": cart_item.quantity
        }, status=status.HTTP_200_OK)


class CurrentCartView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            cart = Cart.objects.filter(user=request.user).first()
            if not cart:
                session_key = request.session.session_key
                if session_key:
                    cart = Cart.objects.filter(session_key=session_key, user=None).first()
                    if cart:
                        cart.user = request.user
                        cart.session_key = None
                        cart.save()
                if not cart:
                    cart = Cart.objects.create(user=request.user)
        else:
            session_key = request.session.session_key or request.session.create()
            cart, created = Cart.objects.get_or_create(session_key=session_key, user=None)

        cart_items = cart.items.all()
        serializer = CartSerializer(cart)
        total = sum(item.product.price * item.quantity for item in cart_items)
        return Response({
            "cart_id": cart.id,
            "items": serializer.data,
            "total": total
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
    

class ProductListByCategoryView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Product.objects.filter(category_id=category_id)


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
