import React from 'react';

const DiseaseCard = ({disease}) => {
    if (!disease || !disease.name) {
        return <p>Invalid disease data</p>;
      }
    
    return (
        <div className='disease-card'>
            <div>
                <p><h3>Name : {disease.name}</h3></p>
            </div>
            <div>
                <p>Description : {disease.description}</p>
            </div>
            <div>
                <p>Symptoms : {disease.symptoms}</p>
            </div>
            <div>
                <p>Common Medicine : {disease.common_medicine}</p>
            </div>
            
        </div>
    );
}

export default DiseaseCard;