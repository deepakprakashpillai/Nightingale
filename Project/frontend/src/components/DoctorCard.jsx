import React from 'react';

const DoctorCard = ({doctor}) => {
    
    return (
        <div className='doctor-card'>
            <div className="card-col">
            <h4>
                <p>{doctor.name}</p>
            </h4>
        <div>
            <p>{doctor.qualification}</p>
        </div>
            </div>
        <div className="card-col">
        <div>
            <p> {doctor.specialization}</p>
        </div>
        <div>
            <p>Phone no.{doctor.phone_no}</p>
        </div>
            
        </div>
        
        </div>
    );
}

export default DoctorCard;