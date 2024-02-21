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
                <p>Precaution 1 : {disease.precaution_1}</p>
            </div>
            <div>
                <p>Precaution 2 : {disease.precaution_2}</p>
            </div>
            <div>
                <p>Precaution 3 : {disease.precaution_3}</p>
            </div>
            <div>
                <p>Description : {disease.description}</p>
            </div>
            <div>
                <p>Symptoms : {disease.symptoms}</p>
            </div>
            
        </div>
    );
}

export default DiseaseCard;