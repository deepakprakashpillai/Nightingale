from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
import tkinter as tk


def popup_message(type, building, floor, room, bed, patient, age, doctor, disease):
    popup = tk.Tk()
    popup.title("Red Alert Notification")
    popup.configure(background=type)

    label = tk.Label(popup, text=f"{type} Alert Received!!!",
                     font=("Arial Bold", 16))
    label.grid(row=0, column=0, columnspan=2, pady=(10, 20))

    details = [
        f"Building: {building}",
        f"Floor: {floor}",
        f"Room: {room}",
        f"Bed: {bed}",
        f"Patient: {patient}",
        f"Age: {age}",
        f"Doctor: {doctor}",
        f"Disease: {disease}"
    ]

    for i, detail in enumerate(details):
        detail_label = tk.Label(popup, text=detail)
        detail_label.grid(row=i+1, column=0, sticky='w', padx=10)

    ok_button = tk.Button(popup, text="OK", command=popup.destroy)
    ok_button.grid(row=len(details)+1, column=0, columnspan=2, pady=(20, 10))

    popup.mainloop()


def alert_signal(request):
    type = request.GET.get('type')
    details = request.GET.get('details')

    sub_string = details.split("_")

    floor = sub_string[0]
    building = sub_string[1]
    patient_name = sub_string[2]
    patient_age = sub_string[3]
    room = sub_string[4]
    bed = sub_string[5]
    disease = sub_string[6]
    doctor_name = sub_string[7]
    popup_message(type, building, floor, room, bed, patient_name,
                  patient_age, doctor_name, disease)
    print(f"{type} alert Received!!! Building: {building} Floor: {floor} Room: {room} Bed: {bed} Patient: {patient_name} Age: {patient_age} Doctor: {doctor_name} Disease: {disease}")
    return JsonResponse({"status": "Red alert received"})
