import React from "react";

const ReportTableSubHeader = () => {
  return (
    <thead>
      <tr className='bg-light'>
        <th>
          <input type='text' placeholder='filter column...' name='eventId' />
        </th>
        <th>
          <input
            type='text'
            placeholder='filter column...'
            name='beneficiaryName'
          />
        </th>
        <th>
          <input
            type='text'
            placeholder='filter column...'
            name='baseLocation'
          />
        </th>
        <th>
          <input
            type='text'
            placeholder='filter column...'
            name='councilName'
          />
        </th>
        <th>
          <input type='text' placeholder='filter column...' name='project' />
        </th>
        <th>
          <input
            type='text'
            placeholder='filter column...'
            name='businessUnit'
          />
        </th>
        <th>Average</th>
        <th>Star</th>
      </tr>
    </thead>
  );
};

export default ReportTableSubHeader;
