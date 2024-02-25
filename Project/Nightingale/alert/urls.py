from django.urls import path

from . import views

urlpatterns = [
    path("red", views.red_signal),
    path("blue", views.blue_signal),
    path("yellow", views.yellow_signal),
    path("pink", views.pink_signal),
]
