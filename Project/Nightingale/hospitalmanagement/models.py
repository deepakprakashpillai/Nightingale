from django.db import models

# Create your models here.


class Nurse(models.Model):
    name = models.CharField(max_length=30)
    position = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    phone_no = models.PositiveIntegerField()
    sex = models.CharField(max_length=1)
    dob = models.DateField()
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Doctor(models.Model):
    name = models.CharField(max_length=30)
    qualification = models.CharField(max_length=30)
    specialization = models.CharField(max_length=30)
    phone_no = models.PositiveIntegerField()
    address = models.CharField(max_length=100)
    sex = models.CharField(max_length=1)
    dob = models.DateField()
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Patient(models.Model):
    name = models.CharField(max_length=30)
    allergies = models.CharField(max_length=250)
    phone_no = models.PositiveIntegerField()
    address = models.CharField(max_length=100)
    sex = models.CharField(max_length=1)
    dob = models.DateField()
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Disease(models.Model):
    name = models.CharField(max_length=30)
    precaution_1 = models.CharField(max_length=250)
    precaution_2 = models.CharField(max_length=250)
    precaution_3 = models.CharField(max_length=250)
    Description = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Medicine(models.Model):
    name = models.CharField(max_length=30)
    Composition = models.CharField(max_length=250)
    side_effects = models.CharField(max_length=250)
    Manufacturer = models.CharField(max_length=250)
    Uses = models.CharField(max_length=250)

    def __str__(self):
        return self.name

# class Admithistory, medicationHistory


class Medication(models.Model):
    medicine = models.ForeignKey(Medicine, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    timing = models.TimeField()
    administered_by = models.ForeignKey(
        Nurse, blank=True, on_delete=models.CASCADE)  # Change cascade to protected


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
