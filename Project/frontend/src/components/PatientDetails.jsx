import React from 'react';

const PatientDetails = ({patient}) => {
    return (
        <div className='details-container-outer'>
            <h2 className='patient-det-text'>Patient Details</h2>
            <div className='details-container-inner'>
                <div className='basic-info'>
                    <p className="patient-name personal-item">{patient.patient.name}</p>
                    <p className='room-details personal-item'>{patient.room_no} | {patient.bed_no}</p>
                    <p className='diseases-name'>{patient.disease.map((disease) => (
                        <p className='disease-item personal-item'> {disease.name+" ,   "} </p>
                        ))}</p>
                    <p className='doctors-name'>{patient.doctor.map((doctor) => (
                        <p className='doctor-item personal-item'>{doctor.name}</p>
                        ))}</p>
                </div>
                <div className='personal-info'>
                    <p className='age-sex personal-item'>{patient.patient.sex} | {patient.patient.age} Y/O</p>
                    <p className='mob personal-item'>Mob : {patient.patient.phone_no}</p>
                    <p className='address personal-item'>Address : {patient.patient.address}</p>
                    <p className='allergies personal-item'>Allergies : {patient.patient.allergies}</p>
                </div>
            </div>
        </div>
    );
}

export default PatientDetails;