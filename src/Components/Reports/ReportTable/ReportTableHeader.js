import React from "react";

const ReportTableHeader = () => {
  return (
    <thead>
      <tr className='bg-light'>
        <th>Event Id</th>
        <th>Beneficiary Name</th>
        <th>Base Location</th>
        <th>Council Name</th>
        <th>Project</th>
        <th>Business Unit</th>
        <th colSpan='2'>Rating</th>
      </tr>
    </thead>
  );
};

export default ReportTableHeader;
