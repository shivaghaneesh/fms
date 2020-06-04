import React from "react";

const UnRegistered = props => {
  const unRegistered = props.unRegistered;
  return (
    <div className='col-sm-4'>
      <div className='card'>
        <div className='card-header card bg-primary text-white'>
          UnRegistered
        </div>
        <div className='card-body'>
          <h5 className='card-title'></h5>
        </div>
        {unRegistered.map(value => (
          <p className='card-text' key={value}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UnRegistered;
