from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("nurses", views.nurses_details),
    path("nurses/<int:id>", views.nurse_details),
    path("doctors", views.doctors_details),
    path("doctors/<int:id>", views.doctor_details),
    path("patients", views.patients_details),
    path("patients/<int:id>", views.patient_details),
    path("medicines", views.medicines_details),
    path("medicines/<int:id>", views.medicine_details),
]
