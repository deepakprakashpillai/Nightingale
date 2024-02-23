import React from 'react';

const MedicationHistoryCard = ({medicationhistory}) => {
    return (
            <div className='medication-cards'>
            <div className="medication-card-data">
            <p>Medicine : {medicationhistory.medicine_name}</p>
            <p>Dosage : {medicationhistory.dosage}</p>
            <p>Scheduled Time : {medicationhistory.timing}</p>
            <p>Administered Time : {medicationhistory.administered_time}</p>
            </div>
        </div>
    
    );
}

export default MedicationHistoryCard;
