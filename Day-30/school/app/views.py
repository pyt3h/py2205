from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *

@api_view(['GET', 'POST'])
def hello(request):    
   return Response({"message" : "Hello world!"})

@api_view(['GET'])#127.0.0.1:8000/api/get-student-list/1
def get_student_list(request, course_id):
   student_list = Student.objects.filter(course__id=course_id)
   print('student_list=', student_list)
   result = []
   for student in student_list:
      result.append({'id': '...', 'name': student.name, 'phone': '...'})
   return Response(result)

#127.0.0.1:8000/api/get-checkin-list/1?date=2022-09-14
@api_view(['GET'])
def get_checkin_list(request, course_id):
   from datetime import datetime
   date = datetime.strptime(request.GET.get('date', ''),'%Y-%m-%d')
   checkin_list = Check_in.objects.filter(
      lesson__course_id=course_id,
      lesson__date=date
   )
   print('checkin_list=', checkin_list)
   result = []
   for checkin in checkin_list:
      result.append({'status': checkin.status, 
                     'student': checkin.student.name})
   return Response(result)
