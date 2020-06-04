import React from "react";
import { Link } from "react-router-dom";

const TotalEvents = () => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-6'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Total Events</h5>
          <p className='card-text'>8</p>
          <Link className='btn btn-primary' to='/events'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalEvents;
