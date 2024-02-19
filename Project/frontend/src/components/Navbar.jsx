import React from 'react';
import "./Navbar.css";
import supportIcon from "../assets/support-icon.svg"
import patientIcon from "../assets/patient-icon.svg"
import precautionIcon from "../assets/precaution-icon.svg"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
        </div>
        </div>
    );
}

export default Navbar;
