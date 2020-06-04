import React from "react";

const Statistics = props => {
  const {
    totalVolunteers,
    totalVolunteerHours,
    totalTravelHours,
    averageRating,
    livesImpacted
  } = props.volunteerData;
  return (
    <div className='col-sm-6'>
      <div className='card '>
        <div className='card-header card bg-primary text-white'>Statistics</div>
        <br></br>
        <table className='table'>
          <thead>
            <tr>
              <th>Average Rating</th>
              <th>Volunteers</th>
              <th>Volunteering Hours</th>
              <th>Overall Hours</th>
              <th>Travel Hours</th>
              <th>Lives Impacted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{averageRating}</td>
              <td>{totalVolunteers}</td>
              <td>{totalVolunteerHours} </td>
              <td>{totalTravelHours}</td>
              <td>{totalTravelHours}</td>
              <td>{livesImpacted}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
