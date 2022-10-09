from time import time
from datetime import datetime

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from rest_framework.serializers import ModelSerializer,CharField
class CustomerSerializer(ModelSerializer):
   class Meta:
      model = Customer
      fields = '__all__'

@api_view(['POST'])#127.0.0.1:8000/api/create-customer
def create_customer(request):
   serializer = CustomerSerializer(data=request.data)
   if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
   else:
      return Response(serializer.errors, status=400)

@api_view(['GET']) # 127.0.0.1:8000/api/search-customer?keyword=Nguyen+Van+A
def search_customer(request):
   params = request.GET
   keyword = params.get('keyword', '')
   customer_list = Customer.objects.filter(name__icontains=keyword)
   serializer = CustomerSerializer(customer_list, many=True)
   return Response(serializer.data)

class ProductSerializer(ModelSerializer):
   class Meta:
      model = Product
      fields = '__all__'
   category_name = CharField(source='category.name',read_only=True)   

@api_view(['GET'])# 127.0.0.1:8000/api/search-product?keyword=hao+hao
def search_product(request):
   PAGE_SIZE = 5
   params = request.GET
   start = int(params.get('start', 0))
   length = int(params.get('length', PAGE_SIZE))
   keyword = params.get('keyword','')
   min_price = params.get('min_price')
   max_price = params.get('max_price')
   category_id = params.get('category_id')
   product_list = Product.objects.filter(name__icontains=keyword)

   if category_id:
      product_list = product_list.filter(category__id=category_id)

   if min_price:
      product_list = product_list.filter(price__gte=min_price)

   if max_price:
      product_list = product_list.filter(price__lte=max_price)

   total = product_list.count()
   items = product_list[start:start+length]

   serializer = ProductSerializer(items,many=True)
   return Response({
      'total': total,
      'items': serializer.data
   })
   #http://127.0.0.1:8000/api/search-product?start=0&length=2

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