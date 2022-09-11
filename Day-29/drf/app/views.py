from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *

#127.0.0.1:8000/api/hello
@api_view(['GET', 'POST'])
def hello(request):    
   return Response({"message" : "Hello world!"})

@api_view(['POST'])
def create_customer(request):#127.0.0.1:8000/api/create-customer
   data = request.data # form-data/json
   customer = Customer.objects.create(
      name=data.get('name',''),
      phone=data.get('phone',''),
      address=data.get('address','')
   )
   return Response({'id': customer.id})

@api_view(['GET'])
def search_customer(request): #127.0.0.1:8000/api/search-customer?keyword=B
   params = request.GET
   keyword = params.get('keyword', '')
   customer_list = Customer.objects.filter(
      name__icontains=keyword
   )
   result = []
   for customer in customer_list:
      result.append({'id': customer.id, 'name': customer.name})
   return Response(result)
   
@api_view(['PUT']) #127.0.0.1:8000/api/update-customer/1
def update_customer(request, id):
   customer = Customer.objects.get(id=id)
   data = request.data
   customer.name = data.get('name','')
   customer.phone = data.get('phone', '')
   customer.address = data.get('address', '')
   customer.save()
   return Response({'success': True})

@api_view(['DELETE'])# 127.0.0.1:8000/api/delete-customer/1
def delete_customer(request, id):
   customer = Customer.objects.get(id=id)
   customer.delete()
   return Response({'success': True})