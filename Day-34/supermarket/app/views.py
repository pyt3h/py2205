from time import time
from datetime import datetime

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from rest_framework.serializers import ModelSerializer
class CustomerSerializer(ModelSerializer):
   class Meta:
      model = Customer
      fields = '__all__'
@api_view(['GET']) # 127.0.0.1:8000/api/search-customer?keyword=Nguyen+Van+A
def search_customer(request):
   params = request.GET
   keyword = params.get('keyword', '')
   customer_list = Customer.objects.filter(name__icontains=keyword)
   serializer = CustomerSerializer(customer_list, many=True)
   return Response(serializer.data)

class ProductSerializer(ModelSerializer):
   class Meta:
      ...

@api_view(['GET'])# 127.0.0.1:8000/api/search-product?keyword=hao+hao
def search_product(request):
   params = ...
   keyword = ...
   product_list = ...
   serializer = ...
   return Response(serializer.data)

@api_view(['POST'])
def purchase(request):
   data = request.data
   if not data.get('customer_id'):
      return Response({'error': 'Missing customer id'},status=404)
   order = Order.objects.create(
      customer=Customer(id=data['customer_id']),
      order_number=str(time()),
      order_date=datetime.now()
   )
   items = data.get('items', [])
   for item in items:
      product = Product.objects.get(id=item.get('product_id')) # get from db
      Order_item.objects.create(
         order=order,
         product=product,
         qty=item.get('qty'),
         price_unit=product.price
      )
   return Response({'success': True})