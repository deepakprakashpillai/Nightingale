
import './Checkbox.css'
import React, { useState, useEffect } from 'react';
import IvsensorAlert from './IvsensorAlert';

const Ivsensor_checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [ivStatus, setIvStatus] = useState(1)

  const callAPI = async () => {
    try {
      const response = await fetch('http://192.168.1.35/waterlevel');
      const data = await response.json();
      console.log(data);

      setIvStatus(data.water_level);

      if (data.water_level == 0) {
        setIsChecked(true);
      }
    } catch (error) {
      console.error('Error fetching temperature:', error);
    }
  };

  useEffect(() => {
    let intervalId;
    if (isChecked) {
      intervalId = setInterval(callAPI, 5000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isChecked]);

  const handleIVCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleIvAlertClose = () => {
    setIsChecked(false); // Reset isChecked only when the TempAlert is closed
  };

  return (
    <div className='checkbox-container'>
    <div>
        IV Drip : 
    </div>
    <div className='checkbox-wrapper-3'>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleIVCheckboxChange}
      id="iv-cbx-3"
    />
    <label for="iv-cbx-3" className="toggle"><span></span></label>
    </div>
    {isChecked && <IvsensorAlert iv={ivStatus} onClose={handleIvAlertClose} />}
    </div>
  );
};

export default Ivsensor_checkbox;
