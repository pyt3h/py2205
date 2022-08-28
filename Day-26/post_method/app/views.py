#app/views.py
from django.shortcuts import HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.db import connection
@csrf_exempt
@require_http_methods(['POST']) 
def test_post(request):
    data = request.POST
    print('==============data=', data)
    return HttpResponse("Hello")

@csrf_exempt
@require_http_methods(['POST'])
def sign_up(request):
    data = request.POST
    print('=====data=', data)
    #=====data= <QueryDict: {'name': ['Khách Hàng 100'], 'phone': ['032423423'], 'addresss': ['TP.HCM']}>
    name = data.get('name', '')
    phone = data.get('phone', '')
    address = data.get('address', '')
    with connection.cursor() as cursor:
        cursor.execute('''
          INSERT INTO customer(name,phone,address)
                    VALUES(%s,%s,%s)
        ''', [name, phone, address])
    return HttpResponse('Success')