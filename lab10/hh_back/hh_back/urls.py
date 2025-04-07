from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include

def index(request):
    return HttpResponse("Welcome! Navigate to /api/ for API access.")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', index),  
]
