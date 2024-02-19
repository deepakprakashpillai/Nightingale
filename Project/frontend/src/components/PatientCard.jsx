import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientCard = ({admit}) => {
    const navigate = useNavigate();
    return (
        <div className='card'>
            <div className="row-1">
                <p>Rooms : {admit.room_no} | Bed : {admit.bed_no}</p>
            </div>
        <div className="row-2">
            <p>{admit.patient.name}</p>
        </div>
        <div className="row-3">
            <p>Admitted on : {admit.admitted_date}</p>
        </div>
        <div className='row-4-5'>
            <div className="row-4">
                <p>{admit.disease.map((disease) => (
                            <p> {disease.name+" ,   "} </p>
                            ))}</p>
            </div>
            <div className="row-5">
                <button onClick={()=>navigate("/patient/"+admit.id)}>KNOW MORE</button>
            </div>
        </div>
        
            
        </div>
    );
}

export default PatientCard;
