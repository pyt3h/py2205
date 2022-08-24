#app1/views.py
from django.shortcuts import HttpResponse

def hello1(request):
    return HttpResponse('Hello1')
