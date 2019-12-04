from django.shortcuts import render
from .models import Student
from .serializer import StudentSerializer, StudentCreateSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.generics import CreateAPIView

@api_view(['GET',])
def api_student_list_view(request):
    student = Student.objects.all()
    if request.method == 'GET':
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data)


class StudentCreateAPIView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentCreateSerializer
