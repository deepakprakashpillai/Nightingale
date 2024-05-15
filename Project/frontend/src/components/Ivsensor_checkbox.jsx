
import './Checkbox.css'
import React, { useState, useEffect } from 'react';

const Ivsensor_checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const callAPI = () => {
    console.log('IV Drip API called');
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
    </div>
  );
};

export default Ivsensor_checkbox;
