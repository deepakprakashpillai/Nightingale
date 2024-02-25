import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import DiseaseCard from "../components/DiseaseCard";
import Navbar from "../components/Navbar";
import "./PrecautionPage.css";
import { useLoaderData } from "react-router-dom";
import AlertButton from "../components/AlertButton";

const PrecautionPage = () => {
  const authToken = localStorage.getItem("token");
  const [diseases, setDiseases] = useState([]);
  const [searchText, setSearchText] = useState("");
  const API_URL = "http://127.0.0.1:8000/diseases?search=" + searchText;

  const diseaseDetails = async () => {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
    const data = await response.json();
    setDiseases(data);
  };

  return (
    <>
      <AlertButton />
      <Navbar />
      <div className="input-container">
        <input
          type="search"
          placeholder="Search disease"
          className="input-searchbox"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input
          type="submit"
          className="input-button"
          onClick={diseaseDetails}
        />
      </div>
      <div className="disease-card-container">
        {diseases?.length > 0 ? (
          <>
            {diseases.map((disease) => (
              <DiseaseCard disease={disease} />
            ))}
          </>
        ) : (
          <h2>Search Diseases!</h2>
        )}
      </div>
    </>
  );
};

export default PrecautionPage;
