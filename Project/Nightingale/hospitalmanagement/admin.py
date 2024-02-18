from django.contrib import admin
from .models import Nurse, Patient, Doctor, Medicine, Disease

# Register your models here.


class PatientAdmin(admin.ModelAdmin):
    list_display = ("name", "phone_no", "allergies", "address",)


class NurseAdmin(admin.ModelAdmin):
    list_display = ("name", "position", "address", "phone_no",)


class DoctorAdmin(admin.ModelAdmin):
    list_display = ("name", "specialization", "qualification", "phone_no",)


admin.site.register(Nurse, NurseAdmin)
admin.site.register(Patient, PatientAdmin)
admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Medicine)
admin.site.register(Disease)
