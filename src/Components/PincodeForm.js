
import React, { useState } from 'react';

import '../App.css';


const PincodeForm = ({ onSubmit }) => {
  const [pincode, setPincode] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pincode);
    setSubmitted(true);
  };

  return (
    <div className='kk'>
     
      {!submitted && (
        <form onSubmit={handleSubmit}>
           <h2>Enter Pincode</h2>
          <input
            id='search'
            type="text"
            value={pincode}
            onChange={handleChange}
            placeholder="pincode"
          />
          <br />
          <button type="submit" id='btn'>Lookup</button>
        </form>
      )}
    </div>
  );
};

export default PincodeForm;
