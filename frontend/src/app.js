import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from './components/HeroSection';
import DestinationList from './components/DestinationList';

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [filters, setFilters] = useState({});
  
  useEffect(() => {
    const fetchDestinations = async () => {
      const { location, maxPrice, numPersons } = filters;
      const query = new URLSearchParams({
        location: location || '',  // If location is undefined, set an empty string
        maxPrice: maxPrice || '',   // If maxPrice is undefined, set an empty string
        numPersons: numPersons || 1  // Ensure numPersons is included if available
      }).toString();

      try {
        const { data } = await axios.get(`http://localhost:5000/api/destinations?${query}`);
        setDestinations(data); // Update the state with fetched destinations
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, [filters]); // Re-run the effect when filters change

  return (
    <div>
      <HeroSection onFilter={setFilters} />
      <DestinationList destinations={destinations} numPersons={filters.numPersons || 1} />
    </div>
  );
};

export default App;
