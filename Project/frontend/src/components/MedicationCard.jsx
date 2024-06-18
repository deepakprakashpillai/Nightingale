import React from 'react';
import Axios from 'axios';

const POST_URL = `${process.env.REACT_APP_HOST_NAME}/med`

const MedicationCard = ({medication,onMedicationPosted}) => {
    const authToken = localStorage.getItem("token");
    const handleClick = async () => {
        try {
            await Axios.post(POST_URL, medication,{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${authToken}`,
                },
              });
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
            <p className='medicine-name'>{medication.medicine.name}</p>
            <p className='medicine-dosage'>Dosage : {medication.dosage}</p>
            <p className='medicine-time'>Time : {medication.timing}</p>
            </div>
            <button onClick={handleClick}></button>
        </div>
    );
}

export default MedicationCard;
