import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import DiseaseCard from "../components/DiseaseCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "./SupportPage.css";
import { useLoaderData } from "react-router-dom";

const PrecautionPage = () => {
  const [diseases, setDiseases] = useState([]);
  const [searchText, setSearchText] = useState("");
  const API_URL = "http://127.0.0.1:8000/diseases?search=" + searchText;

  const diseaseDetails = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setDiseases(data);
  };

  return (
    <>
      <Navbar />
      <input
        type="search"
        placeholder="search disease"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <input type="submit" onClick={diseaseDetails} />
      <div>
        {diseases?.length > 0 ? (
          <>
            {diseases.map((disease) => (
              <DiseaseCard disease={disease} />
            ))}
          </>
        ) : (
          <div>
            <h2>Search Diseases!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default PrecautionPage;
