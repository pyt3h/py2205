#app/views.py
from django.shortcuts import HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@require_http_methods(['POST']) 
def test_post(request):
    data = request.POST
    print('==============data=', data)
    return HttpResponse("Hello")

#Quit the server with CTRL-BREAK.
#==============data= <QueryDict: {'username': 
# ['nguyenvana'], 'password': ['abc@123']}>
#[28/Aug/2022 19:11:21] "POST /test-post HTTP/1.1" 200 5