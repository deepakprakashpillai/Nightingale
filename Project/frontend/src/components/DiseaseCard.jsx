import React from 'react';

const DiseaseCard = ({disease}) => {
    if (!disease || !disease.name) {
        return <p>Invalid disease data</p>;
      }
    
    return (
        <div>
            <div>
                <p>{disease.name}</p>
            </div>
        <div>
            <p>{disease.precaution_1}</p>
        </div>
        <div>
            <p>{disease.precaution_2}</p>
        </div>
        <div>
            <p>{disease.precaution_3}</p>
        </div>
        <div>
            <p>{disease.description}</p>
        </div>
        <div>
            <p>{disease.symptoms}</p>
        </div>
            
        </div>
    );
}

export default DiseaseCard;