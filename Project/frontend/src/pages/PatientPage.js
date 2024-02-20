import React, { useEffect, useState } from "react";
import PatientDetails from "../components/PatientDetails";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AlertButton from "../components/AlertButton";
import MedicationCard from "../components/MedicationCard";
import PatientCard from "../components/PatientCard";
import "./PatientPage.css";

const API_URL = "http://127.0.0.1:8000/admitted/";

const API_URL_Med = "http://127.0.0.1:8000/medication?name=";

const PatientPage = () => {
  const [medications, setMedications] = useState([]);
  const { id } = useParams();
  const patient = useLoaderData();
  let patient_name = "";

  const fetchMedications = async () => {
    const patient_name = patient.patient.name.split(" ")[0];
    console.log(patient.patient.name);
    const response = await fetch(API_URL_Med + patient_name);
    console.log(API_URL_Med + patient_name);
    const data = await response.json();
    setMedications(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMedications();
  }, [patient]);

  const onMedicationPosted = () => {
    fetchMedications();
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
  const response = await fetch(API_URL + id);
  return response.json();
};
