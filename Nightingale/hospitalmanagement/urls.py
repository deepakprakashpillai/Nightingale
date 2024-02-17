from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("nurses", views.nurses_details, name="nurses"),
    path("get-nurse-details", views.get_all_nurse_details),
    path("get-nurse-details/<int:id>", views.get_nurse_details)
]
