import React from 'react';

const DiseaseCard = ({disease}) => {
    if (!disease || !disease.name) {
        return <p>Invalid disease data</p>;
      }
    
    return (
        <div className='disease-card'>
            <div className='disease-name'>
                <p><h3>{disease.name}</h3></p>
            </div>
            <div className='disease-desc'>
                <p>{disease.description}</p>
            </div>
            <div className='disease-symptom'>
                <p><b>Symptoms : </b>{disease.symptoms}</p>
            </div>
            <div className='disease-med'>
                <p><b>Common Medicine : </b>{disease.common_medicine}</p>
            </div>
            
        </div>
    );
}

export default DiseaseCard;