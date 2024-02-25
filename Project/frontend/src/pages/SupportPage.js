import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Navbar from "../components/Navbar";
import "./SupportPage.css";
import { useLoaderData } from "react-router-dom";
import AlertButton from "../components/AlertButton";

const SupportPage = () => {
  const authToken = localStorage.getItem("token");
  const [doctors, setDoctors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const API_URL = "http://127.0.0.1:8000/doctors?search=" + searchText;

  const doctorDetails = async () => {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
    const data = await response.json();
    setDoctors(data);
  };
  useEffect(() => {
    doctorDetails();
  }, [searchText]);

  return (
    <>
      <AlertButton />
      <Navbar />
      <input
        type="search"
        placeholder="search doctor"
        value={searchText}
        className="doc-search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="doc-card-container">
        {doctors?.length > 0 ? (
          <>
            {doctors.map((doctor) => (
              <DoctorCard doctor={doctor} />
            ))}
          </>
        ) : (
          <div>
            <h2>NO doctors found!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default SupportPage;
