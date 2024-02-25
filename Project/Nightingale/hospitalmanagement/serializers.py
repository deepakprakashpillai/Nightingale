from rest_framework import serializers
from . models import Doctor, Patient, Disease, Medicine, Admitted, Medication, MedicationHistory


# class NurseSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Nurse
#        fields = '__all__'


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


# class PatientDoctorSerializer(serializers.ModelSerializer):
#    patient_id = PatientSerializer(read_only=True)
#    doctor_id = DoctorSerializer(read_only=True)
#
#    class Meta:
#        model = Patient_Doctor
#        fields = ['patient_id', 'doctor_id', 'assigned_date']

class AdmittedSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    doctor = DoctorSerializer(read_only=True, many=True)
    disease = DiseaseSerializer(read_only=True, many=True)

    class Meta:
        model = Admitted
        fields = '__all__'


class MedicationSerializer(serializers.ModelSerializer):
    medicine = MedicineSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)

    class Meta:
        model = Medication
        fields = '__all__'


class MedicationHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicationHistory
        fields = '__all__'
