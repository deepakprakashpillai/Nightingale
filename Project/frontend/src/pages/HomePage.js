import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PatientCard from "../components/PatientCard";
import AlertButton from "../components/AlertButton";
import "./HomePage.css";

const HomePage = () => {
  //Change this to change default floor
  let fl = 2;
  let buil = "RB";
  const authToken = localStorage.getItem("token");
  const [admits, setAdmits] = useState([]);
  const [floorNumber, setfloorNumber] = useState(fl);
  const [buildingName, setBuildingName] = useState(buil);
  const [open, setOpen] = useState(false);

  //localStorage.setItem("floor", fl);
  //localStorage.setItem("building", buil);

  localStorage.setItem("patient_name", "Not available");
  localStorage.setItem("patient_age", "Not available");
  localStorage.setItem("room", "Unavailabale");
  localStorage.setItem("bed", "Unavailabale");
  localStorage.setItem("disease", "Unavailable");
  localStorage.setItem("doctor_name", "Unavailable");

  const API_URL =
    "http://127.0.0.1:8000/admitted?floor=" +
    floorNumber +
    "&building=" +
    buildingName;

  const admitDetails = async () => {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
    const data = await response.json();
    setAdmits(data);
  };

  useEffect(() => {
    admitDetails();
  }, [floorNumber, buildingName]);

  const changeFloor = () => {};

  const handleFloorChange = (newValue) => {
    setfloorNumber(newValue);
    localStorage.setItem("floor", newValue);
  };
  const handleBuildingChange = (newValue) => {
    setBuildingName(newValue);
    localStorage.setItem("building", newValue);
  };

  return (
    <>
      <AlertButton />
      <Navbar
        onFloorChange={handleFloorChange}
        onBuildingChange={handleBuildingChange}
        isHomePage={true}
      />
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
