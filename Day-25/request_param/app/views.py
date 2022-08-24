from django.shortcuts import render, HttpResponse
from django.db import connection
import json

def log_sql(connection):
    for q in connection.queries:
        print(q['sql'])

def search_customer(request):
    params = request.GET
    keyword = params.get('keyword', '')
    print('======keyword=', keyword)
    result = []
    with connection.cursor() as cursor:
        print(f'''
            SELECT id,name FROM customer WHERE name LIKE '%{keyword}%'
            ''')
        cursor.execute(f'''
            SELECT id,name FROM customer WHERE name LIKE %s
            ''',
            [f'%{keyword}%']
        )
        table = cursor.fetchall()
        for row in table:
            id, name = row
            result.append({'id':id, 'name': name})
        
        log_sql(connection)

    return to_json(result)

def search_product(request):
    params = request.GET
    keyword = params.get('keyword', '')
    price_min = params.get('price_min', 0)
    price_max = params.get('price_max', 1e9)
    print('=====',keyword, price_min, price_max)
    result = [] #TODO
    return to_json(result)

def to_json(data):
    return HttpResponse(
        json.dumps(data)
    )

def view_news(request, category):
    return HttpResponse(category)

# Create your views here.
def search(request):
    params = request.GET # {'keyword': "Abc"}
    print("======== params=", params)
    keyword = params.get('keyword', '')
    result = [f'{keyword}-1', f'{keyword}-2', f'{keyword}-3']
    return to_json(result)

def index(request):
    return render(request, 'index.html')
