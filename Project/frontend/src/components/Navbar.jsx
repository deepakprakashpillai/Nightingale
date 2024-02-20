import React from 'react';
import "./Navbar.css";
import supportIcon from "../assets/support-icon.svg"
import patientIcon from "../assets/patient-icon.svg"
import precautionIcon from "../assets/precaution-icon.svg"
import { NavLink } from 'react-router-dom';
import  { useEffect, useState } from "react";
import menuIcon from "../assets/menu-icon.png";

const Navbar = ({ onFloorChange, onBuildingChange,isHomePage }) => {
    let fl = 2;
  let buil = "RB";
  const [floorNumber, setfloorNumber] = useState(fl);
  const [buildingName, setBuildingName] = useState(buil);
  const [open, setOpen] = useState(false);

  const handleFloorChange = (event) =>{
    const newValue = event.target.value;
    setfloorNumber(newValue);
    onFloorChange(newValue);
  }
  const handleBuildingChange = (event) =>{
    const newValue = event.target.value;
    setBuildingName(newValue);
    onBuildingChange(newValue);
  }

    return(
        <div className='nav'>
            <div className="container-nav">
            <NavLink to="/support" exact className="item">
                <img src={supportIcon} alt="" />
                <p>SUPPORT</p>
            </NavLink>
            <NavLink to="/home"exact className="item">
                <img src={patientIcon} alt="" />
                <p>PATIENTS</p>
            </NavLink>
            <NavLink to="/precaution" exact className="item">
                <img src={precautionIcon} alt="" />
                <p>PRECAUTIONS</p>
            </NavLink>  
            {isHomePage && (
            <div>
            {/*props.children*/}
            <a className="drop-down-menu" href="#" onClick={() => setOpen(!open)}>
          <img src={menuIcon} alt="menu-icon" />
          </a>
          {open && (
            <div>
              <div className="floor-building-bar">
                <label>
                  Floor:
                  <select
                    name="floor"
                    className="floor-select"
                    value={floorNumber} // ...force the select's value to match the state variable...
                    onChange={handleFloorChange}
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
                    onChange={handleBuildingChange}
                  >
                    <option value="RB">RB</option>
                    <option value="VB">VB</option>
                    <option value="AB">AB</option>
                    <option value="AK">AK</option>
                  </select>
                </label>
              </div>
            </div>
          )}
            </div> )}
        </div>
        </div>
    );
}

export default Navbar;
