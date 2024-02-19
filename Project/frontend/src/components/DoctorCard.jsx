import React from 'react';

const DoctorCard = ({doctor}) => {
    return (
        <div>
            <div>
                <p>{doctor.name}</p>
            </div>
        <div>
            <p>{doctor.qualification}</p>
        </div>
        <div>
            <p>{doctor.specialization}</p>
        </div>
        <div>
            <p>{doctor.phone_no}</p>
        </div>
            
        </div>
    );
}

export default DoctorCard;