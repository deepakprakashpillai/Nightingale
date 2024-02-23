import React from 'react';
import Axios from 'axios';

const POST_URL = "http://127.0.0.1:8000/med"

const MedicationCard = ({medication,onMedicationPosted}) => {
    const handleClick = async () => {
        try {
            await Axios.post(POST_URL, medication);
            console.log("Medication successfully posted.");
            onMedicationPosted();
        } catch (error) {
            console.error("Error posting medication:", medication);
            console.log("Response data:", error.response.data);  // Log or display the response data
        }
    };
    
    return (
        <div className='medication-cards'>
            <div className="medication-card-data">
            <p>Medicine : {medication.medicine.name}</p>
            <p>Dosage : {medication.dosage}</p>
            <p>Time : {medication.timing}</p>
            </div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default MedicationCard;
