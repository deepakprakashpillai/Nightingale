from django.shortcuts import render
from django.http import HttpResponse
from .models import Nurse


def index(request):
    return HttpResponse("Hello, world. You're at the Hospitalmanagement index.")

def nurses_details(request):
    all_nurses = Nurse.objects.all()
    all_nurses_dict = {'nurses' : all_nurses}
    return render(request,'nurses.html',all_nurses_dict)