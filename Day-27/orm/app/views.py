#app/views.py
import json
from django.shortcuts import HttpResponse
from .models import *
from django.db.models import Q
#127.0.0.1:8000/search-customer?keyword=01233
def search_customer(request): 
    params = request.GET
    keyword = params.get('keyword', '')
    result = []
    customer_list = Customer.objects.all()
    customer_list = customer_list.filter(
        Q(name__icontains=keyword) |
        Q(phone__icontains=keyword)
    )
    for customer in customer_list:
        result.append({
            'id': customer.id,
            'phone': customer.phone,
            'name': customer.name
        })
    return HttpResponse(json.dumps(result))

#127.0.0.1:8000/search-product
#?keyword=IP&categ_id=2&price_max=12000000&price_min=5000000
def search_product(request):
    params = request.GET
    keyword = params.get('keyword', '')
    categ_id = params.get('categ_id')
    price_min = params.get('price_min', 0)
    price_max = params.get('price_max', 1e9)
    result = []
    product_list = Product.objects.all()
    product_list = product_list.filter(
        name__icontains=keyword,
        price__gte=price_min
    )
    if categ_id:
        product_list = product_list.filter(category__id=categ_id)
    if price_max:
        product_list = product_list.filter(price__lte=price_max)

    for product in product_list:
        result.append({
            'id': product.id, 
            'name': product.name
        })
    return HttpResponse(json.dumps(result))

#127.0.0.1:8000/get-customer-history/1
def get_customer_history(request, cid):
    result = []
    order_list = Order.objects.all()
    order_list = order_list.filter(customer__id=cid)
    for order in order_list:
        result.append({
            'product_name': order.product.name,
            'qty': order.qty,
            'order_date': order.order_date.strftime('%d/%m/%Y')
        })
    return HttpResponse(json.dumps(result))

#127.0.0.1:8000/get-product-history/1
def get_product_history(request, pid):
    result = []
    order_list = Order.objects.filter(product__id=pid)
    for order in order_list:
        result.append({
            'customer_name': order.customer.name,
            'qty': order.qty,
            'order_date': order.order_date.strftime('%d/%m/%Y')
        })
    return HttpResponse(json.dumps(result))