#app.views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from rest_framework.serializers import ModelSerializer
class CustomerSerializer(ModelSerializer):
   class Meta:
      model = Customer
      fields = '__all__' #['id', 'name', 'phone']
      #exclude = ['address']

@api_view(['GET']) # 127.0.0.1:8000/api/search-customer
def search_customer(request):
   customer_list = Customer.objects.all()
   serializer = CustomerSerializer(customer_list,many=True)
   return Response(serializer.data)

@api_view(['GET', 'POST'])
def hello(request):    
   return Response({"message" : "Hello world!"})

@api_view(['POST'])#127.0.0.1:8000/api/create-customer
def create_customer(request):
   data = request.data
   print('data=', data) #data= {'name': 'Nguyen Van C', 'phone': '03423432'}
   serializer = CustomerSerializer(data=data)
   
   if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
   else:
      return Response(serializer.errors, status=404)

@api_view(['PUT'])# 127.0.0.1:8000/api/update-customer/1
def update_customer(request, id):
   data = request.data
   print('data=', data)
   customer = Customer.objects.get(id=id)
   serializer = CustomerSerializer(data=data, instance=customer)
   if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
   else:
      return Response(serializer.errors, status=404)