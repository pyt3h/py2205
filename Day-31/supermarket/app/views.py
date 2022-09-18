from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from rest_framework.serializers import ModelSerializer
class CustomerSerializer:
   class Meta:
      model = ...
      fields = ...
@api_view(['GET']) # 127.0.0.1:8000/api/search-customer?keyword=Nguyen+Van+A
def search_customer(request):
   params = ...
   keyword = params.get('...', '')
   customer_list = Customer.objects.filter(name__icontains=keyword)
   serializer = CustomerSerializer(customer_list, many=True)
   return Response(serializer.data)

@api_view(['GET'])# 127.0.0.1:8000/api/search-product?keyword=hao+hao
def search_product(request):
   return Response([])