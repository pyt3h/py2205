from django.urls import path
from .views import *
urlpatterns = [
   path('test-post', test_post),#127.0.0.1:8000/test-post
   path('sign-up', sign_up), #127.0.0.1:8000/sign-up
   #path('', index),
]

