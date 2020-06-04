import React from "react";
import { Link } from "react-router-dom";

const LivesImpacted = () => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-6'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'> Lives Impacted</h5>
          <p className='card-text'>877</p>
          <Link className='btn btn-primary' to='/'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LivesImpacted;
