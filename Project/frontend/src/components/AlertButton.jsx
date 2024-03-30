import React, { useState } from 'react';
import "./AlertButton.css"
import alertIcon from "../assets/alert-icon-new.png"

const ALERT_API = "http://127.0.0.1:8000/alert/"

const AlertButton = () => {
    const [open, setOpen] = useState(false);

    const handleButtonPress = async (type) => {
        try {
            const response = await fetch(ALERT_API+type);
            if (response.ok) {
                console.log('Signal sent successfully');
            } else {
                console.error('Error sending signal');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
        setOpen(false);
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
