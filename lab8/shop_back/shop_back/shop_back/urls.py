from django.http import HttpResponse
from django.urls import path, include
from django.contrib import admin  

def homepage(request):
    return HttpResponse('<h1>Welcome to Shop Back API</h1>')

urlpatterns = [
    path('', homepage, name='homepage'),  
    path('admin/', admin.site.urls), 
    path('api/', include('api.urls')),
]
