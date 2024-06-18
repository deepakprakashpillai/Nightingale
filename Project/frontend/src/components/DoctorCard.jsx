import React from 'react';

const DoctorCard = ({doctor}) => {
    
    return (
        <div className='doctor-card'>
            <h4 className='doc-name'>
                <p>{doctor.name}</p>
            </h4>
            <div className='qual-spec'>
                <div className='doc-qual'>
                    <p>{doctor.qualification}</p>
                </div>
                <div className='doc-spec'>
                    <p> {doctor.specialization}</p>
                </div>
            </div>
            
            <div className='doc-ph'>
                <p>Phone : {doctor.phone_no}</p>
            </div>
        </div>
    );
}

export default DoctorCard;