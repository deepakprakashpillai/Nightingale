import React from "react";
import PatientDetails from "../components/PatientDetails";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PatientCard from "../components/PatientCard";

const API_URL = "http://127.0.0.1:8000/admitted/";

const PatientPage = () => {
  const { id } = useParams();
  const patient = useLoaderData();
  return (
    <>
      <Navbar />
      <p>{patient.building_name}</p>

      <div className="patient-card-container">
        {Object.keys(id).length > 0 ? (
          <>
            <PatientCard admit={patient} />
          </>
        ) : (
          <div className="empty-patients">
            <h2>NO patients found!</h2>
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
