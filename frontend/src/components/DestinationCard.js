import React from 'react';

const DestinationCard = ({ destination, numPersons }) => {
  const { name, location, description, image, basePrice } = destination;
  const price = basePrice * numPersons;

  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Price for {numPersons} persons:</strong> ${price}</p>
    </div>
  );
};

export default DestinationCard;
