import React from "react";

const NotParticipated = props => {
  const notParticipated = props.notParticipated;
  return (
    <div className='col-sm-4'>
      <div className='card'>
        <div className='card-header card bg-primary text-white'>
          Not Participated
        </div>
        <div className='card-body'>
          <h5 className='card-title'></h5>
        </div>
        {notParticipated.map(value => (
          <p className='card-text' key={value}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NotParticipated;
