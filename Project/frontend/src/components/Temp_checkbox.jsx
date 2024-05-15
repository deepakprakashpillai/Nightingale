import './Checkbox.css'
import React, { useState, useEffect } from 'react';


const Temp_checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const callAPI = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/186464f0-6b9e-4f79-9db2-8bbb75852315');
      const data = await response.json();
      console.log(data)

      if (data.temperature > 30) {
        setIsChecked(!isChecked);
        alert('Fever detected!');
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

  return (
    <div className='checkbox-container'>
    <div>
        Temperature : 
    </div>
    <div className='checkbox-wrapper-3'>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleTempCheckboxChange}
      id="cbx-3"
    />
    <label for="cbx-3" className="toggle"><span></span></label>
    </div>
    </div>
  );
};

export default Temp_checkbox;