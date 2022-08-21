#views.py
import json
from django.shortcuts import HttpResponse
def index(request):
    return HttpResponse("<b>Home page</b>")

def hello(request):
    result = {"message": "Hello"}
    return HttpResponse(
        json.dumps(result),
        content_type='application/json'
    )