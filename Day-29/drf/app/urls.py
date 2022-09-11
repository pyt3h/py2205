from django.urls import path

from .views import *

urlpatterns = [
    path('create-customer', create_customer),
    path('update-customer/<id>', update_customer),
    path('delete-customer/<id>', delete_customer),
    path('search-customer', search_customer),
    path('hello', hello)
]
