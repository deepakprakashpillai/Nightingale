import React, { useState } from 'react';
import "./AlertButton.css"
import alertIcon from "../assets/alert-icon-new.png"
import Swal from 'sweetalert2'

const ALERT_API = `${process.env.REACT_APP_HOST_NAME}/alert`

const AlertButton = () => {
    const [open, setOpen] = useState(false);

    let floor = localStorage.getItem("floor");
    let building = localStorage.getItem("building");
    let patient_name = localStorage.getItem("patient_name");
    let patient_age = localStorage.getItem("patient_age");
    let room = localStorage.getItem("room");
    let bed = localStorage.getItem("bed");
    let disease = localStorage.getItem("disease");
    let doctor_name = localStorage.getItem("doctor_name");

    let details = floor + "_" + building + "_" + patient_name + "_" + patient_age + "_" + room + "_" + bed + "_" + disease + "_" + doctor_name;


    const handleButtonPress = async (type) => {
        try {
            console.log(ALERT_API+"?type="+type+"&details="+details);
            const response = await fetch(ALERT_API+"?type="+type+"&details="+details);
            if (response.ok) {
                console.log('Signal sent successfully');
            } else {
                console.error('Error sending signal');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
        setOpen(false);
        Swal.fire({
            title: type+" Alert Successfull!",
            text: "Floor no : "+floor + " Building : " + building + " Patient : " + patient_name + " Age : " + patient_age + " Room : " + room + " Bed : " + bed + " Disease : " + disease + " Doctor : " + doctor_name,
            icon: "success"
          });
    };


    return (
        <><a className='alert-button'href='#' onClick={() => setOpen(!open)}>
            <img src={alertIcon} alt="alert" />
        </a>
        {open &&
        <div className='alert-types'>
            <div className='alert-row'>
            <p>Red Alert</p>
            <div className="red-alert alert-item" onClick={() => handleButtonPress("red")}/>
            </div>
            <div className='alert-row'>
            <p>Blue Alert</p>
            <div className="blue-alert alert-item" onClick={() => handleButtonPress("blue")}/>
            </div>
            <div className='alert-row'>
            <p>Pink Alert</p>
            <div className="pink-alert alert-item" onClick={() => handleButtonPress("pink")}/>
            </div>
            <div className='alert-row'>
            <p>Yellow Alert</p>
            <div className="yellow-alert alert-item" onClick={() => handleButtonPress("yellow")}/>
            </div>
        </div>}
        </>
    );
}

export default AlertButton;
