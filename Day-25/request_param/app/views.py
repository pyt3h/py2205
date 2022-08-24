from django.shortcuts import render, HttpResponse
import json
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
