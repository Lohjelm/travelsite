import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationList = ({ destinations, numPersons }) => {
  return (
    <div className="destination-list">
      <h2>Destinations</h2>
      <div className="destination-cards">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
            numPersons={numPersons}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
