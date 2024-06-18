from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import tkinter as tk
from tkinter import ttk


def center_window(window):
    """ Center the window on the screen """
    window.update_idletasks()
    width = window.winfo_width()
    height = window.winfo_height()
    x = (window.winfo_screenwidth() // 2) - (width // 2)
    y = (window.winfo_screenheight() // 2) - (height // 2)
    window.geometry(f'{width}x{height}+{x}+{y}')


def popup_message(type, building, floor, room, bed, patient, age, doctor, disease):
    popup = tk.Tk()
    popup.title("Red Alert Notification")
    popup.configure(background='white')
    popup.resizable(False, False)  # Prevent resizing

    # Set an icon if available (replace 'icon.ico' with your icon file)
    # popup.iconbitmap('icon.ico')

    # Header label
    header_label = tk.Label(popup, text=f"{type} Alert Received!!!", font=(
        "Arial Bold", 16), fg=type.lower(), bg='white')
    header_label.grid(row=0, column=0, columnspan=2, pady=(10, 20))

    # Details
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
        detail_label = tk.Label(
            popup, text=detail, font=("Arial", 12), bg='white')
        detail_label.grid(row=i+1, column=0, sticky='w', padx=10, pady=2)

    # OK button
    ok_button = ttk.Button(popup, text="OK", command=popup.destroy)
    ok_button.grid(row=len(details)+1, column=0, pady=(20, 10))

    center_window(popup)  # Center the popup
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
    popup_message(type.upper(), building, floor, room, bed, patient_name,
                  patient_age, doctor_name, disease)
    print(f"{type} alert Received!!! Building: {building} Floor: {floor} Room: {room} Bed: {bed} Patient: {patient_name} Age: {patient_age} Doctor: {doctor_name} Disease: {disease}")
    return JsonResponse({"status": "Red alert received"})
