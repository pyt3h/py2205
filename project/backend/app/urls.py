from django.urls import path

from .views import *

urlpatterns = [
    path('create-customer', create_customer),
    path('search-customer', search_customer),
    path('get-customer-info', get_customer_info),
    path('update-customer-info', update_customer_info),
    path('search-product', search_product),
    path('get-product-detail/<id>', get_product_detail),
    path('get-brand-list', get_brand_list),
    path('purchase', purchase),
]
