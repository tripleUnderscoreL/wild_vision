# flake8: noqa
from rest_framework import serializers
from .models import Product, Category, CustomUser, CartItem, ProductReview, BaseReview, StoreReview, Cart
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.db.models import Avg

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'image']


class BaseReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseReview
        fields = ['id', 'user', 'review_text', 'rating', 'created_at']
        read_only_fields = ['user', 'created_at']


class ProductReviewSerializer(BaseReviewSerializer):
    class Meta(BaseReviewSerializer.Meta):
        model = ProductReview
        fields = BaseReviewSerializer.Meta.fields + ['product', 'image']


class StoreReviewSerializer(BaseReviewSerializer):
    class Meta(BaseReviewSerializer.Meta):
        model = StoreReview
        fields = [field for field in BaseReviewSerializer.Meta.fields if field != 'rating']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    reviews = ProductReviewSerializer(many=True, read_only=True)
    rating = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'description', 'price', 'image', 'reviews', 'rating', 'features']

    def get_rating(self, obj):
        reviews = ProductReview.objects.filter(product=obj)
        if reviews.exists():
            avg_rating = reviews.aggregate(Avg('rating'))['rating__avg']
            return round(avg_rating, 2)
        return 0


class SimpleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'image', 'description']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'email', 'phone_number', 'first_name', 'last_name', 'address']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as e:
            raise serializers.ValidationError(e.messages)
        return value

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user


class CartItemSerializer(serializers.ModelSerializer):
    product = SimpleProductSerializer()

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity']

    def validate_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError('количество должно быть больше одного')
        return value


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'user', 'items']