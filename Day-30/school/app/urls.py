from django.urls import path

from .views import *

urlpatterns = [
    path('get-student-list/<course_id>', get_student_list),
    path('get-checkin-list/<course_id>', get_checkin_list),
    path('hello', hello)
]
