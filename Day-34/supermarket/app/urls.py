from django.urls import path

from .views import *

urlpatterns = [
    path('search-customer', search_customer),
    path('search-product', search_product),
    path('purchase', purchase),
    #path('hello', hello)
]
