from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

def list_products(request):
    products = Product.objects.all()
    data = [{"id": p.id, "name": p.name, "price": p.price, "description": p.description, "count": p.count, "is_active": p.is_active, "category": p.category.name} for p in products]
    return JsonResponse(data, safe=False)

def get_product(request, id):
    product = get_object_or_404(Product, id=id)
    data = {"id": product.id, "name": product.name, "price": product.price, "description": product.description, "count": product.count, "is_active": product.is_active, "category": product.category.name}
    return JsonResponse(data)

def list_categories(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)

def get_category(request, id):
    category = get_object_or_404(Category, id=id)
    data = {"id": category.id, "name": category.name}
    return JsonResponse(data)

def list_products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.all()  # Using related_name='products' from Product model
    data = [{"id": p.id, "name": p.name, "price": p.price, "description": p.description, "count": p.count, "is_active": p.is_active} for p in products]
    return JsonResponse(data, safe=False)
