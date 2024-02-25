from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . models import Doctor, Patient, Medicine, Disease, Admitted, Medication, MedicationHistory
from . serializers import DoctorSerializer, PatientSerializer, MedicineSerializer, DiseaseSerializer, AdmittedSerializer, MedicationSerializer, MedicationHistorySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


def index(request):
    return HttpResponse("Hello, world. You're at the Hospitalmanagement index.")


# Nurses API
# @api_view(['GET', 'POST'])
# def nurses_details(request):
#    if request.method == 'GET':
#        all_nurses = Nurse.objects.all()
#        serializer = NurseSerializer(all_nurses, many=True)
#        return Response(serializer.data)
#    elif request.method == 'POST':
#        serializer = NurseSerializer(data=request.data)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data)
#        else:
#            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def nurse_details(request, id):
#    try:
#        nurse = Nurse.objects.get(pk=id)
#    except Nurse.DoesNotExist:
#        return Response(status=status.HTTP_404_NOT_FOUND)
#    if request.method == 'GET':
#        serializer = NurseSerializer(nurse)
#        return Response(serializer.data)
#    elif request.method == 'PUT':
#        serializer = NurseSerializer(nurse, data=request.data)
#        if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data)
#        else:
#            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#    elif request.method == 'DELETE':
#        nurse.delete()
#        return Response(status=status.HTTP_204_NO_CONTENT)

# Doctors API


@api_view(['GET', 'POST'])
def doctors_details(request):
    search_term = request.query_params.get('search')
    if request.method == 'GET':
        all_doctors = Doctor.objects.all()
        if search_term is not None:
            all_doctors = all_doctors.filter(name__icontains=search_term)
        serializer = DoctorSerializer(all_doctors, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
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

# Patients API


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


@api_view(['GET', 'PUT', 'DELETE'])
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

# Medicines API


@api_view(['GET', 'POST'])
def medicines_details(request):
    if request.method == 'GET':
        all_medicines = Medicine.objects.all()
        serializer = MedicineSerializer(all_medicines, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MedicineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def medicine_details(request, id):
    try:
        medicine = Medicine.objects.get(pk=id)
    except Medicine.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = MedicineSerializer(medicine)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MedicineSerializer(medicine, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        medicine.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Diseases API


@api_view(['GET', 'POST'])
def diseases_details(request):
    search_term = request.query_params.get('search')
    if request.method == 'GET':
        all_diseases = Disease.objects.all()
        if search_term is not None:
            all_diseases = all_diseases.filter(name__icontains=search_term)
        serializer = DiseaseSerializer(all_diseases, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DiseaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def disease_details(request, id):
    try:
        disease = Disease.objects.get(pk=id)
    except Disease.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = DiseaseSerializer(disease)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DiseaseSerializer(disease, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        disease.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# @api_view(['GET'])
# def patient_doctors_details(request):
#    all_pds = Patient_Doctor.objects.select_related(
#        'patient_id', 'doctor_id').all()
#    serializer = PatientDoctorSerializer(all_pds, many=True)
#    return Response(serializer.data)


@api_view(['GET'])
def all_admitted_details(request):
    search_term_floor = request.query_params.get('floor')
    search_term__building = request.query_params.get('building')
    try:
        all_admits = Admitted.objects.select_related(
            'patient').prefetch_related('disease', 'doctor').filter(floor_no__exact=search_term_floor).filter(building_name__iexact=search_term__building)

    except Admitted.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = AdmittedSerializer(all_admits, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def admitted_details(request, id):
    try:
        admit = Admitted.objects.select_related(
            'patient').prefetch_related('disease', 'doctor').get(pk=id)
    except Admitted.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = AdmittedSerializer(admit)
        return Response(serializer.data)


@api_view(['POST', 'GET'])
def doctor_list(request):
    if request.method == 'POST':
        searchterm = request.POST.get('searchterm')
    try:
        doctor = Doctor.objects.filter(name__icontains=searchterm)
    except Doctor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = DoctorSerializer(doctor)
    return Response(serializer.data)


@api_view(['GET'])
def all_medication_details(request):
    search_patient_name = request.query_params.get('name')
    try:
        all_medications = Medication.objects.select_related(
            'patient', 'medicine', 'administered_by').filter(patient__name__icontains=search_patient_name).order_by('timing')

    except Medication.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = MedicationSerializer(all_medications, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def medication_transfer(request):
    if request.method == 'POST':
        medication_data = request.data
        if medication_data:
            # Extract relevant data from the Medication object
            medication_id = medication_data.get('id')
            print(medication_id)
            medicine_name = medication_data.get(
                'medicine', {}).get('name', 'Not Available')
            patient_name = medication_data.get(
                'patient', {}).get('name', 'Not Available')
            timing = medication_data.get('timing', None)
            dosage = medication_data.get('dosage', 'Not Available')
            medication_history_data = {
                'medicine_name': medicine_name,
                'patient_name': patient_name,
                'timing': timing,
                'dosage': dosage,
            }
            print(medication_history_data)
            serializer = MedicationHistorySerializer(
                data=medication_history_data)
            if serializer.is_valid():
                serializer.save()
                med = Medication.objects.get(pk=medication_id)
                med.delete()
                return Response(serializer.data)

    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
def medication_history(request, name):
    try:
        med_his = MedicationHistory.objects.filter(
            patient_name__icontains=name).order_by('-administered_time')
    except MedicationHistory.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = MedicationHistorySerializer(med_his, many=True)
        return Response(serializer.data)
