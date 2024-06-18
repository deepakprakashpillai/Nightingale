import './Checkbox.css';
import React, { useState, useEffect } from 'react';
import TempAlert from './TempAlert';

const Temp_checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [temperature, setTemperature] = useState(0);

  const callAPI = async () => {
    try {
      const response = await fetch('http://192.168.1.35/temperature');
      const data = await response.json();
      console.log(data);

      setTemperature(data.temperature);

      if (data.temperature > 30) {
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

  const handleTempCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTempAlertClose = () => {
    setIsChecked(false); // Reset isChecked only when the TempAlert is closed
  };

  return (
    <div className='checkbox-container checkbox-temp'>
      <div>Temperature :</div>
      <div className='checkbox-wrapper-3'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleTempCheckboxChange}
          id="cbx-3"
        />
        <label htmlFor="cbx-3" className="toggle"><span></span></label>
      </div>
      {isChecked && <TempAlert temperature={temperature} onClose={handleTempAlertClose} />}
    </div>
  );
};

export default Temp_checkbox;

