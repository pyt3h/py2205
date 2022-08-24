from django.urls import path
from .views import *

urlpatterns = [
   path('', index),
   path('news/<category>', view_news), #127.0.0.1:8000/news/thoi-su
   path('search', search),
   path('search-customer', search_customer),#127.0.0.1:8000/search-customer?keyword=Nguyen+Van+A
   path('search-product', search_product),#127.0.0.1:8000/search-product?keyword=Acer&price_min=5000000&price_max=10000000
]

#127.0.0.1:8000/search?keyword=Abc --> {'keyword': "Abc"}