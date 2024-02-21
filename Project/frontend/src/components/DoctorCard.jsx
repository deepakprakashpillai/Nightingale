import React from 'react';

const DoctorCard = ({doctor}) => {
    
    return (
        <div className='doctor-card'>
            <div className="card-col">
            <div>
                <p>{doctor.name}</p>
            </div>
        <div>
            <p>{doctor.qualification}</p>
        </div>
            </div>
        <div className="card-col">
        <div>
            <p>{doctor.specialization}</p>
        </div>
        <div>
            <p>{doctor.phone_no}</p>
        </div>
            
        </div>
        
        </div>
    );
}

export default DoctorCard;