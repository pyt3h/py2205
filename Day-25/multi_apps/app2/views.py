#app2/views.py
from django.shortcuts import HttpResponse

def hello2(request):
    return HttpResponse('Hello2')
