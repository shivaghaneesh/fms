import React, { Fragment } from "react";

const Participated = props => {
  const participated = props.participated;

  return (
    <div className='col-sm-4'>
      <div className='card'>
        <div className='card-header card bg-primary text-white'>
          Participated
        </div>
        <div className='card-body'>
          <h5 className='card-title'></h5>
        </div>
        {participated.map(({ rating, likes, dislikes }, index) => (
          <Fragment key={index}>
            <p className='card-text'>Ratings: {rating}</p>
            <p className='card-text'>
              <strong>Likes: </strong>
              {likes}
            </p>
            <p className='card-text'>DisLikes : {dislikes}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Participated;
