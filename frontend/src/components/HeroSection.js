import React, { useState } from 'react';

const HeroSection = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [numPersons, setNumPersons] = useState(1);

  const handleApplyFilters = () => {
    // Pass the filters back to the parent component
    onFilter({
      location,
      maxPrice,
      numPersons,
    });
  };

  return (
    <div className="hero-section">
      <div className="hero-heading">
        <h1>Find Your Next Adventure</h1>
      </div>
      <div className="filters">
        <label>
          Location:
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <label>
          Number of Persons:
          <input
            type="number"
            value={numPersons}
            onChange={(e) => setNumPersons(Number(e.target.value))}
            min="1"
          />
        </label>
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    </div>
  );
};

export default HeroSection;
