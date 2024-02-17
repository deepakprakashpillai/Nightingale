from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . models import Nurse,Doctor,Patient,Medicine,Disease
from . serializers import NurseSerializer,DoctorSerializer,PatientSerializer,MedicineSerializer,DiseaseSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


def index(request):
    return HttpResponse("Hello, world. You're at the Hospitalmanagement index.")


#Nurses API
@api_view(['GET', 'POST'])
def nurses_details(request):
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
def nurse_details(request, id):
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

#Doctors API
@api_view(['GET', 'POST'])
def doctors_details(request):
    if request.method == 'GET':
        all_doctors = Doctor.objects.all()
        serializer = DoctorSerializer(all_doctors, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT','DELETE'])
def doctor_details(request, id):
    try:
        doctor = Doctor.objects.get(pk=id)
    except Doctor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = DoctorSerializer(doctor)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DoctorSerializer(doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#Patients API
@api_view(['GET', 'POST'])
def patients_details(request):
    if request.method == 'GET':
        all_patients = Patient.objects.all()
        serializer = PatientSerializer(all_patients, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT','DELETE'])
def patient_details(request, id):
    try:
        patient = Patient.objects.get(pk=id)
    except Patient.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = PatientSerializer(patient)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PatientSerializer(patient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    