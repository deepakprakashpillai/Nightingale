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
    # is_admitted = models.BooleanField(default = 'False')
    # building_name = models.CharField(max_length = 50)
    # floor_no  = models.PositiveSmallIntegerField()
    # room_no = models.CharField(max_length = 10)
    # bed_no = models.CharField(max_length = 10)

    def __str__(self):
        return self.name


class Patient_Nurse(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    nurse_id = models.ForeignKey(Nurse, on_delete=models.CASCADE)
    assigned_date = models.DateField()


class Patient_Doctor(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor_id = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    assigned_date = models.DateField()


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

# class medication, medicationHistory


class Admitted(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ManyToManyField(Doctor)
    building_name = models.CharField(max_length=50)
    floor_no = models.PositiveSmallIntegerField()
    room_no = models.CharField(max_length=10)
    bed_no = models.CharField(max_length=10)
