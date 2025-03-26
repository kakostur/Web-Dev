from django.test import TestCase
from .models import Product, Category

class ProductTestCase(TestCase):
    def setUp(self):
        category = Category.objects.create(name="Test Category")
        Product.objects.create(name="Test Product", price=10.0, description="Test", count=5, is_active=True, category=category)

    def test_product_creation(self):
        product = Product.objects.get(name="Test Product")
        self.assertEqual(product.price, 10.0)
