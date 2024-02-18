import React from 'react';
import "./PatientCard.css"

const PatientCard = ({patient}) => {
    return (
        <div className='card'>
            <div className="row-1">
                <p>Rooms : A23 | Bed : 001</p>
            </div>
        <div className="row-2">
            <p>{patient.name}</p>
        </div>
        <div className="row-3">
            <p>Admitted on : 26th Nov 2023 | 17:09</p>
        </div>
        <div className="row-4">
            <p>FERRIBLE RESPONSE / PYREXIA</p>
        </div>
        <div className="row-5">
            <button>KNOW MORE</button>
        </div>
            
        </div>
    );
}

export default PatientCard;
