import React, { useState } from 'react';
import './PincodeDetails.css'; 

const PincodeDetails = ({ pincodeData,pincode,message }) => {
  const [filterValue, setFilterValue] = useState('');
  const [filteredData, setFilteredData] = useState(pincodeData[0].PostOffice);

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterValue(value);

    const filtered = pincodeData[0].PostOffice.filter((office) =>
      office.Name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="pincode-details-container">
      <h2>Pincode: {pincode}</h2>
      <h4>Message: {message}</h4>
      <input
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Filter by post office name"
        className="filter-input"
      />
      {filteredData.length === 0 ? (
        <p className="not-found-message">Couldn’t find the postal data you’re looking for…</p>
      ) : (
        <ul className="pincode-details-list">
          {filteredData.map((office) => (
            <li key={office.Name} className="pincode-details-item">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Post Office: {office.Name}</h5>
                  <p className="card-text">Branch Type: {office.BranchType}</p>
                  <p className="card-text">Delivery Status: {office.DeliveryStatus}</p>
                  <p className="card-text">District: {office.District}</p>
                  <p className="card-text">State: {office.State}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PincodeDetails;
