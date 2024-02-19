import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PatientCard from "../components/PatientCard";
import "./HomePage.css";
import { useLoaderData } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/admitted";

const HomePage = () => {
  const admits = useLoaderData();
  console.log(admits);

  return (
    <>
      <Navbar />
      <div className="patient-card-container">
        {admits?.length > 0 ? (
          <>
            {admits.map((admit) => (
              <PatientCard admit={admit} />
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

export default HomePage;

export const admitLoader = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
