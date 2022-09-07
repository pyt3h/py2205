from django.urls import path
from .views import *

urlpatterns = [
   path('search-customer', search_customer),
   path('search-product', search_product),
   path('get-customer-history/<cid>', get_customer_history),
   path('get-product-history/<pid>', get_product_history),
   #path('', index),
]

