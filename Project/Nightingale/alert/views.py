from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.


def red_signal(request):
    return JsonResponse({"status": "Red alert received"})


def blue_signal(request):
    return JsonResponse({"status": "Blue alert received"})


def yellow_signal(request):
    return JsonResponse({"status": "Yellow alert received"})


def pink_signal(request):
    return JsonResponse({"status": "Pink alert received"})
