#app1/urls.py
from django.urls import path
from .views import *
urlpatterns = [
    path('hello1', hello1), # 127.0.0.1:8000/app1/hello1
]