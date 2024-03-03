
import React, { useState } from 'react';
import PincodeForm from './Components/PincodeForm';
import PincodeDetails from './Components/PincodeDetails';

const App = () => {
  const [pincodeData, setPincodeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterValue, setFilterValue] = useState('');

  const fetchPincodeData = async (pincode) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      setPincodeData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <PincodeForm onSubmit={fetchPincodeData} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pincodeData && (
        <PincodeDetails pincodeData={pincodeData} filterValue={filterValue} onFilterChange={handleFilterChange} />
      )}
    </div>
  );
};

export default App;
