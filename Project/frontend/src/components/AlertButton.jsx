import React, { useState } from 'react';
import "./AlertButton.css"
import alertIcon from "../assets/alert-icon.png"

const AlertButton = () => {
    const [open, setOpen] = useState(false);
    return (
        <><a className='alert-button'href='#' onClick={() => setOpen(!open)}>
            <img src={alertIcon} alt="alert" />
        </a>
        {open &&
        <div className='alert-types'>
            <div className='alert-row'>
            <p>Red Alert</p>
            <div className="red-alert alert-item"/>
            </div>
            <div className='alert-row'>
            <p>Blue Alert</p>
            <div className="blue-alert alert-item"/>
            </div>
            <div className='alert-row'>
            <p>Pink Alert</p>
            <div className="pink-alert alert-item"/>
            </div>
            <div className='alert-row'>
            <p>Yellow Alert</p>
            <div className="yellow-alert alert-item"/>
            </div>
        </div>}
        </>
    );
}

export default AlertButton;
