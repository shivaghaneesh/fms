import React from "react";

const PocDetails = props => {
  const pocDetails = props.pocDetails;
  console.log(props);
  return (
    <div className='col-sm-6'>
      <div className='card '>
        <div className='card-header card bg-primary text-white'>
          POC Details
        </div>
        <br></br>

        <table className='table'>
          <thead>
            <tr>
              <th>Employee Id#</th>
              <th>Name</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {pocDetails.map(({ employeeId, name, contactNumber }) => (
              <tr key={employeeId}>
                <td>{employeeId}</td>
                <td>{name}</td>
                <td>{contactNumber} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PocDetails;
