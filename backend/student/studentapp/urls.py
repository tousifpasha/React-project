from django.urls import path
from studentapp.views import *
urlpatterns = [

    path('student/', api_student_list_view, name='student_list'),
    path('add/', StudentCreateAPIView.as_view(), name='add-student'),
]