import React, { useEffect, useState } from "react";
import PatientDetails from "../components/PatientDetails";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AlertButton from "../components/AlertButton";
import MedicationCard from "../components/MedicationCard";
import MedicationHistoryCard from "../components/MedicationHistoryCard";
import PatientCard from "../components/PatientCard";
import "./PatientPage.css";

const API_URL = "http://127.0.0.1:8000/admitted/";

const API_URL_Med = "http://127.0.0.1:8000/medication?name=";
const API_URL_Med_History = "http://127.0.0.1:8000/medhistory/";
const authToken = localStorage.getItem("token");
const PatientPage = () => {
  const [medications, setMedications] = useState([]);
  const [medicationhistorys, setMedicationHistorys] = useState([]);
  const { id } = useParams();
  const patient = useLoaderData();
  let patient_name = "";

  const fetchMedications = async () => {
    const patient_name = patient.patient.name.split(" ")[0];
    localStorage.setItem("patient_name", patient.patient.name);
    localStorage.setItem("patient_age", patient.patient.age);
    localStorage.setItem("room", patient.room_no);
    localStorage.setItem("bed", patient.bed_no);
    localStorage.setItem("disease", patient.disease[0].name);
    localStorage.setItem("doctor_name", patient.doctor[0].name);

    console.log(patient.patient.name);
    const response = await fetch(API_URL_Med + patient_name, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
    console.log(API_URL_Med + patient_name);
    const data = await response.json();
    setMedications(data);
    console.log(data);
  };

  const fetchMedicationsHistory = async () => {
    const patient_name = patient.patient.name.split(" ")[0];
    console.log(patient.patient.name);
    const response = await fetch(API_URL_Med_History + patient_name, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
    console.log(API_URL_Med + patient_name);
    const data = await response.json();
    setMedicationHistorys(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMedications();
    fetchMedicationsHistory();
  }, [patient]);

  const onMedicationPosted = () => {
    fetchMedications();
    fetchMedicationsHistory();
  };
  return (
    <>
      <AlertButton />
      <Navbar />

      {Object.keys(id).length > 0 ? (
        <div>
          <PatientDetails patient={patient} />
        </div>
      ) : (
        <div className="empty-patients">
          <h2>NO patients found!</h2>
        </div>
      )}
      <div className="medication-container">
        <h2>Medications List</h2>
        {medications?.length > 0 ? (
          <>
            {medications.map((medication) => (
              <MedicationCard
                medication={medication}
                onMedicationPosted={onMedicationPosted}
              />
            ))}
          </>
        ) : (
          <div>
            <h4>No medications scheduled</h4>
          </div>
        )}
      </div>

      <div className="medication-container">
        <h2>Medications History</h2>
        {medicationhistorys?.length > 0 ? (
          <>
            {medicationhistorys.map((medicationhistory) => (
              <MedicationHistoryCard medicationhistory={medicationhistory} />
            ))}
          </>
        ) : (
          <div>
            <h2>No medications Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default PatientPage;

export const patientLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(API_URL + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${authToken}`,
    },
  });
  return response.json();
};
