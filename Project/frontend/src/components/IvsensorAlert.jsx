import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IvsensorAlert = ({ iv, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Trigger the onClose callback
  };

  return (
    <>
      {isOpen && (
        <div className="iv-alert">
          <div className="ivalert-text">
            Liquid level : {iv}
          </div>
          {iv == 0 && (
            <div className="alert-overflow">
                <h2>Alert!!</h2>
              <div className='alert-text'>The The Iv Drip sensor is showing absence of Liquid</div>
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

IvsensorAlert.propTypes = {
  iv: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired, // onClose callback function
};

export default IvsensorAlert;
