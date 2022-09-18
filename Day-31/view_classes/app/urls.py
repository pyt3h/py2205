from django.urls import path

from .views import *

urlpatterns = [
    path('purchase', purchase),
    path('hello2', HelloView.as_view()),
    path('hello', hello)
]
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('customer', CustomerViewSet)
urlpatterns += router.urls