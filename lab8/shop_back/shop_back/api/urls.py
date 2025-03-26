from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.list_products, name='list_products'),
    path('products/<int:id>/', views.get_product, name='get_product'),
    path('categories/', views.list_categories, name='list_categories'),
    path('categories/<int:id>/', views.get_category, name='get_category'),
    path('categories/<int:id>/products/', views.list_products_by_category, name='list_products_by_category'),
]
