# flake8: noqa
from rest_framework import serializers  # type: ignore
from .models import Product, Category, CustomUser, CartItem, ProductReview, BaseReview, StoreReview
from django.contrib.auth.password_validation import validate_password  # type: ignore
from django.core.exceptions import ValidationError  # type: ignore

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


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

    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'description', 'price', 'image', 'reviews']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["username", "password", "email", "phone_number"]
        extra_kwargs = {"password": {"write_only": True}}

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
    class Meta:
        model = CartItem
        fields = ['product', 'quantity']
