import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PatientCard from "../components/PatientCard";
import "./HomePage.css";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  //Change this to change default floor
  let fl = 2;
  let buil = "RB";

  const [admits, setAdmits] = useState([]);
  const [floorNumber, setfloorNumber] = useState(fl);
  const [buildingName, setBuildingName] = useState(buil);

  const API_URL =
    "http://127.0.0.1:8000/admitted?floor=" +
    floorNumber +
    "&building=" +
    buildingName;

  const admitDetails = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setAdmits(data);
  };

  useEffect(() => {
    admitDetails();
  }, [floorNumber, buildingName]);

  const changeFloor = () => {};

  return (
    <>
      <Navbar />
      <div className="floor-building-bar">
        <label>
          Floor:
          <select
            name="floor"
            className="floor-select"
            value={floorNumber} // ...force the select's value to match the state variable...
            onChange={(e) => setfloorNumber(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>
          Building:
          <select
            name="building"
            className="building-select"
            value={buildingName} // ...force the select's value to match the state variable...
            onChange={(e) => setBuildingName(e.target.value)}
          >
            <option value="RB">RB</option>
            <option value="VB">VB</option>
            <option value="AB">AB</option>
            <option value="AK">AK</option>
          </select>
        </label>
      </div>
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
