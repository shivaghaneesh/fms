import React from "react";

const Actions = () => {
  return (
    <div className='card '>
      <div className='card-header card bg-primary text-white'>ACTIONS</div>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'> Email Remainder!</h5>

              <p className='card-text'>
                Sit back and relax while the app sends emails!
              </p>
              <p className='card-text'>Email</p>
              <p className='card-text'>
                <input type='email' placeholder='Email Address' name='email' />
              </p>
              <button className='btn btn-primary'>Send Email</button>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'> Future Implementations!</h5>
              <p className='card-text'>
                This placeholder can be used for adding any other actions in the
                future!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
