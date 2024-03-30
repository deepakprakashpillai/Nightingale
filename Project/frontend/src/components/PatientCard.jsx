import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientCard = ({admit}) => {
    const navigate = useNavigate();
    return (
        <div className='card'>
            <div className='col-1'>
            <div className="row-1">
                <p>Rooms : {admit.room_no} | Bed : {admit.bed_no}</p>
            </div>
        <div className="row-2">
            <p>{admit.patient.name}</p>
        </div>
        <div className="row-3">
            <p>Admitted on : {admit.admitted_date.slice(0,10)}</p>
        </div>

            <div className="row-4">
                <p>{admit.disease.map((disease) => (
                            <> {disease.name+" ,   "} </>
                            ))}</p>
            </div>
            
            </div>
                <button className="col-2" onClick={()=>navigate("/patient/"+admit.id)}>KNOW <br />MORE</button>

            
        
            
        </div>
    );
}

export default PatientCard;
