import React from 'react';
import "./Navbar.css";
import supportIcon from "../assets/support-icon.svg"
import patientIcon from "../assets/patient-icon.svg"
import precautionIcon from "../assets/precaution-icon.svg"

const Navbar = () => {
    return(
        <div className='nav'>
            <div className="container-nav">
            <div className="item">
                <img src={supportIcon} alt="" />
                <p>SUPPORT</p>
            </div>
            <div className="item">
                <img src={patientIcon} alt="" />
                <p>PATIENTS</p>
            </div>
            <div className="item">
                <img src={precautionIcon} alt="" />
                <p>PRECAUTIONS</p>
            </div>   
        </div>
        </div>
    );
}

export default Navbar;
