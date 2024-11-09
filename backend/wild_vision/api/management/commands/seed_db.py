# flake8: noqa
from django.core.management.base import BaseCommand  # type: ignore
from api.models import Category, Product
from decimal import Decimal

class Command(BaseCommand):
    help = 'Seed the database with sample data'

    def handle(self, *args, **kwargs):
        # Create categories
        categories = ['Тестовая категория 1', 'Тестовая категория 2', 'Тестовая категория 3', 'Тестовая категория 4']
        for category_name in categories:
            category, created = Category.objects.get_or_create(name=category_name)
            if created:
                self.stdout.write(self.style.SUCCESS(f'Создана категория: {category_name}'))

        # Create sample products
        products = [
            {"name": "Тестовый товар 1", "description": "Тестовое описание 1", "price": Decimal("299.99"), "category": "Тестовая категория 1"},
            {"name": "Тестовый товар 2", "description": "Тестовое описание 2", "price": Decimal("999.99"), "category": "Тестовая категория 1"},
            {"name": "Тестовый товар 3", "description": "Тестовое описание 3", "price": Decimal("19.99"), "category": "Тестовая категория 2"},
            {"name": "Тестовый товар 4", "description": "Тестовое описание 4", "price": Decimal("9.99"), "category": "Тестовая категория 3"},
            {"name": "Тестовый товар 5", "description": "Тестовое описание 5", "price": Decimal("4.99"), "category": "Тестовая категория 4"},
        ]

        for product_data in products:
            category = Category.objects.get(name=product_data['category'])
            product, created = Product.objects.get_or_create(
                name=product_data['name'],
                description=product_data['description'],
                price=product_data['price'],
                category=category
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Создан товар: {product_data["name"]}'))