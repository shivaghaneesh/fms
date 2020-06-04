import React from "react";

const EventLocation = props => {
  const eventLocation = { ...props.eventLocation };
  const {
    baseLocation,
    venueAddress,
    councilName,
    beneficiaryName,
    feedBacks,
    averageRating
  } = eventLocation;
  return (
    <div className='col-sm-6'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            Location: {baseLocation} Council: {councilName}
          </h5>
        </div>
        <p className='card-text'>{beneficiaryName} </p>
        <p className='card-text'>{venueAddress}</p>
        <p className='card-text'> Feedbacks : {feedBacks} </p>
        <p className='card-text'> Average Rating: {averageRating} </p>
      </div>
    </div>
  );
};

export default EventLocation;
