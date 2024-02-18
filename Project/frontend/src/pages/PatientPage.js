import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PatientCard from "../components/PatientCard";
import "./PatientPage.css";

const API_URL = "http://127.0.0.1:8000/patients";

const PatientPage = () => {
  const [patients, setPatients] = useState([]);

  const patientDetails = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPatients(data);
  };
  useEffect(() => {
    patientDetails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="patient-card-container">
        {patients?.length > 0 ? (
          <>
            {patients.map((patient) => (
              <PatientCard patient={patient} />
            ))}
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
