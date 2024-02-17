from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . models import Nurse
from . serializers import NurseSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


def index(request):
    return HttpResponse("Hello, world. You're at the Hospitalmanagement index.")


def nurses_details(request):
    all_nurses = Nurse.objects.all()
    all_nurses_dict = {'nurses': all_nurses}
    return render(request, 'nurses.html', all_nurses_dict)


@api_view(['GET', 'POST'])
def get_all_nurse_details(request):
    if request.method == 'GET':
        all_nurses = Nurse.objects.all()
        serializer = NurseSerializer(all_nurses, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = NurseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT','DELETE'])
def get_nurse_details(request, id):
    try:
        nurse = Nurse.objects.get(pk=id)
    except Nurse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = NurseSerializer(nurse)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = NurseSerializer(nurse, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        nurse.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)