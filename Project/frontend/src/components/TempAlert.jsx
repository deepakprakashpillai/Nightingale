import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TempAlert = ({ temperature, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Trigger the onClose callback
  };

  return (
    <>
      {isOpen && (
        <div className="temp-alert">
          <div className="alert-text">
            Current Temperature: {temperature.toFixed(2)}°C
          </div>
          {temperature > 34 && (
            <div className="alert-high">
              <div className='alert-text'>Alert! The patient is detected to have a high temperature.</div>
              <div className="alert-temp">Temperature : {temperature.toFixed(2)}°C</div>
              <button className="close-btn" onClick={handleClose}>
            Close
          </button>
            </div>
          )}
          
        </div>
      )}
    </>
  );
};

TempAlert.propTypes = {
  temperature: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired, // onClose callback function
};

export default TempAlert;
