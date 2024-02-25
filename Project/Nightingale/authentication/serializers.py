# serializers.py
from rest_framework import serializers
from .models import Nurse
from django.contrib.auth.models import User


class NurseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nurse
        fields = ('id', 'user', 'name', 'position',
                  'address', 'phone_no', 'sex', 'dob', 'age')
