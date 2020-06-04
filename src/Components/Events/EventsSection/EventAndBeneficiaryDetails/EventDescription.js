import React from "react";

const EventDescription = props => {
  const eventDescription = { ...props.eventDescription };

  const {
    eventid,
    eventName,
    eventDate,
    description,
    status,
    category
  } = eventDescription;
  return (
    <div className='col-sm-6'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            Event Id: {eventid} Date: {eventDate}
          </h5>

          <p className='card-text'>{eventName} </p>
          <p className='card-text'>{description}</p>

          <p className='card-text'> Status : {status}</p>
          <p className='card-text'> Category : {category}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
