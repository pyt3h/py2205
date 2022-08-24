#app2/urls.py
from django.urls import path
from .views import *
urlpatterns = [
    path('hello2', hello2), # 127.0.0.1:8000/app2/hello2
]