from django.urls import path

from . import views

urlpatterns = [
    path("alert", views.alert_signal),
]
