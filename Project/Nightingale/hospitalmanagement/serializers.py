from rest_framework import serializers
from . models import Nurse, Doctor, Patient, Disease, Medicine, Patient_Doctor


class NurseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nurse
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'


class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = '__all__'


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = '__all__'


class PatientDoctorSerializer(serializers.ModelSerializer):
    patient_id = PatientSerializer(read_only=True)
    doctor_id = DoctorSerializer(read_only=True)

    class Meta:
        model = Patient_Doctor
        fields = ['patient_id', 'doctor_id', 'assigned_date']
