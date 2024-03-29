from django.db import models


class Doctor(models.Model):
    name = models.CharField(max_length=30)
    qualification = models.CharField(max_length=30)
    specialization = models.CharField(max_length=30)
    phone_no = models.PositiveBigIntegerField()
    address = models.CharField(max_length=100)
    sex = models.CharField(max_length=1)
    dob = models.DateField()
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Patient(models.Model):
    name = models.CharField(max_length=30)
    allergies = models.CharField(max_length=250)
    phone_no = models.PositiveBigIntegerField()
    address = models.CharField(max_length=100)
    sex = models.CharField(max_length=1)
    dob = models.DateField()
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Disease(models.Model):
    name = models.CharField(max_length=60)
    symptoms = models.CharField(max_length=400)
    description = models.CharField(max_length=1300)
    common_medicine = models.CharField(max_length=700, default="not available")

    def __str__(self):
        return self.name


class Medicine(models.Model):
    name = models.CharField(max_length=30)
    composition = models.CharField(max_length=250)
    side_effects = models.CharField(max_length=250)
    manufacturer = models.CharField(max_length=250)
    uses = models.CharField(max_length=250)

    def __str__(self):
        return self.name

# class Admithistory, medicationHistory


class Medication(models.Model):
    medicine = models.ForeignKey(Medicine, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    timing = models.DateTimeField()
    dosage = models.CharField(max_length=30, default="1", null=True)
    # Change cascade to protected

    def __str__(self):
        return f'{self.medicine} to {self.patient} on {self.timing}'


class Admitted(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ManyToManyField(Doctor)
    disease = models.ManyToManyField(Disease)
    building_name = models.CharField(max_length=50)
    floor_no = models.PositiveSmallIntegerField()
    room_no = models.CharField(max_length=10)
    bed_no = models.CharField(max_length=10)
    admitted_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.patient.name} in Bed {self.bed_no}| Room {self.room_no}'


class MedicationHistory(models.Model):
    medicine_name = models.CharField(max_length=255)
    patient_name = models.CharField(max_length=255)
    timing = models.DateTimeField()
    dosage = models.CharField(max_length=255)
    administered_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.medicine_name} to {self.patient_name} on {self.administered_time}'
