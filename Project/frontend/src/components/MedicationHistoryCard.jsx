import React from 'react';

const MedicationHistoryCard = ({medicationhistory}) => {
    return (
            <div className='medication-cards history-card'>
            <div className="medication-card-data">
            <p className='medicine-name'>{medicationhistory.medicine_name}</p>
            <p className='medicine-dosage'>Dosage : {medicationhistory.dosage}</p>
            <p className='medicine-time'>Scheduled Time : {medicationhistory.timing}</p>
            <p className='medicine-adm-time'> Administered Time : {medicationhistory.administered_time}</p>
            </div>
        </div>
    
    );
}

export default MedicationHistoryCard;
