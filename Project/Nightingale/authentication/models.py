from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Nurse(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=30, null=True)
    position = models.CharField(max_length=30, null=True)
    address = models.CharField(max_length=100, null=True)
    phone_no = models.PositiveBigIntegerField(null=True)
    sex = models.CharField(max_length=1, null=True)
    dob = models.DateField(null=True)
    age = models.PositiveIntegerField(null=True)
