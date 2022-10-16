from time import time
from datetime import datetime

from django.db.models import Q
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer,CharField
from .models import *

# ==================================== Customer =========================================================

class CustomerSerializer(ModelSerializer):
   class Meta:
      model = Customer
      fields = ['id', 'name', 'phone', 'address']

@api_view(['POST']) #127.0.0.1:8000/api/create-customer
def create_customer(request):
   data = request.data
   name = data.get('name')
   phone = data.get('phone')
   address = data.get('address')
   password = data.get('password', '')
   password2 = data.get('password2', '')

   errors = {}
   if not name:
      errors['name'] = 'This field is required'
   
   if not phone:
      errors['phone'] = 'This field is required'
   
   if not address:
      errors['address'] = 'This field is required'

   if User.objects.filter(username=phone).exists():
      errors['phone'] = 'User with this phone already exists'
   
   if len(password) < 6:
      errors['password'] = 'Password is too short'
   
   if password != password2:
      errors['password2'] = 'Password does not match'
   
   if len(errors) > 0:
      return Response(errors, status=400)

   user = User.objects.create_user(
      username=phone, 
      password=password
   )

   Customer.objects.create(
      name=name,
      phone=phone,
      address=address,
      user=user
   )

   return Response({'success' : True})

@api_view(['GET'])
def get_customer_info(request):
   if not request.user.is_authenticated:
      return Response({'error': 'Forbidden'}, status=403)
   
   customer = Customer.objects.filter(user=request.user).first()
   if not customer:
      return Response({'error': 'No customer found'}, status=404)
   
   serializer = CustomerSerializer(customer)
   return Response(serializer.data)

@api_view(['POST'])
def update_customer_info(request):
   data = request.data
   name = data.get('name')
   address = data.get('address')

   if not request.user.is_authenticated:
      return Response({'error': 'Forbidden'}, status=403)
   
   customer = Customer.objects.filter(user=request.user).first()
   if not customer:
      return Response({'error': 'No customer found'}, status=404)

   errors = {}
   if not name:
      errors['name'] = 'This field is required'
   
   if not address:
      errors['address'] = 'This field is required'

   if len(errors) > 0:
      return Response(errors, status=400)
   
   customer.name = name
   customer.address = address
   customer.save()
   return Response({'success': True})

@api_view(['GET']) # 127.0.0.1:8000/api/search-customer?keyword=Nguyen+Van+A
def search_customer(request):
   params = request.GET
   keyword = params.get('keyword', '')
   customer_list = Customer.objects.filter(Q(name__icontains=keyword) | Q(phone__icontains=keyword))
   serializer = CustomerSerializer(customer_list, many=True)
   return Response(serializer.data)

# ==================================== Product =========================================================

class ProductSerializer(ModelSerializer):
   class Meta:
      model = Product
      fields = '__all__'

   brand_name = CharField(source='brand.name',read_only=True)   

@api_view(['GET']) # 127.0.0.1:8000/api/search-product?brand_ids=1,2,3&keyword=T-shirt&start=0&length=2
def search_product(request):
   PAGE_SIZE = 5
   params = request.GET
   start = int(params.get('start', 0))
   length = int(params.get('length', PAGE_SIZE))
   keyword = params.get('keyword','')
   brand_ids = params.get('brand_ids', '').strip()
   min_price = params.get('min_price')
   max_price = params.get('max_price')

   brand_ids = brand_ids.split(',') if brand_ids else []
   
   product_list = Product.objects.filter(name__icontains=keyword, brand_id__in=brand_ids)

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

@api_view(['GET'])#127.0.0.1:8000/api/get-product-detail/1
def get_product_detail(request, id):
   product = Product.objects.get(id=id)
   serializer = ProductSerializer(product)
   return Response(serializer.data)

@api_view(['GET'])
def get_brand_list(request):
   brand_list = Brand.objects.all()
   result = []
   for brand in brand_list:
      result.append({'id': brand.id, 'name': brand.name})

   return Response(result)

# ==================================== Order =========================================================

def validate_purchase(customer_name, customer_phone, customer_address, items):
   errors = {}
   has_error = False
   
   if not customer_name:
      errors['customer_name'] = 'This field is required'
      has_error = True

   if not customer_phone:
      errors['customer_phone'] = 'This field is required'
      has_error = True

   if not customer_address:
      errors['customer_address'] = 'This field is required'
      has_error = True
   
   errors['items'] = []

   for item in items:
      item_error = {}
      if not item.get('qty'):
         item_error['qty'] = 'This field is required'
         has_error = True

      errors['items'].append(item_error)
   
   return errors, has_error

@api_view(['POST'])#127.0.0.1:8000/api/purchase
def purchase(request):
   data = request.data
   customer_id = data.get('customer_id')
   customer_name = data.get('customer_name')
   customer_phone = data.get('customer_phone')
   customer_address = data.get('customer_address')
   items = data.get('items', [])
   
   errors, has_error = validate_purchase(customer_name, customer_phone, customer_address, items)
   if has_error:
      return Response(errors, status=400)

   order = Order.objects.create(
      customer=Customer(id=customer_id) if customer_id else None,
      customer_name=customer_name,
      customer_phone=customer_phone,
      customer_address=customer_address,
      order_number=str(time()),
      order_date=datetime.now()
   )
   
   for item in items:
      product = Product.objects.get(id=item.get('product_id')) # get from db
      Order_item.objects.create(
         order=order,
         product=product,
         qty=item.get('qty'),
         price_unit=product.price
      )
   return Response({'success': True})