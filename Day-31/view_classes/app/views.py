from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer

from .models import *
class CustomerSerializer(ModelSerializer):
   class Meta:
      model = Customer
      fields = '__all__'
#127.0.0.1:8000/api/customer/1
class CustomerViewSet(ModelViewSet):
   serializer_class = CustomerSerializer
   queryset = Customer.objects.all()


#127.0.0.1:8000/api/hello2
class HelloView(APIView):
   def get(self, request):
      return Response({'message': 'Hello from get'})
   def post(self, request):
      return Response({'message': 'Hello from post'})

@api_view(['GET', 'POST'])
def hello(request):    
   return Response({"message" : "Hello world!"})

from datetime import datetime
from time import time

@api_view(['POST'])# 127.0.0.1:8000/api/purchase
def purchase(request):
   data = request.data
   if not data.get('customer_id'):
      return Response({'error': 'Missing customer id'},status=404)
   items = data.get('items', [])
   order_number = str(time())
   for item in items:
      product = Product.objects.get(id=item.get('product_id'))
      Order.objects.create(
         customer_id=data['customer_id'],
         product=product,
         qty=item.get('qty'),
         price_unit=product.price,
         order_date=datetime.now(),
         order_number=order_number + '_' + str(product.id)
      )
   return Response({'success': True})