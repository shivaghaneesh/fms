import React from "react";

const EventTableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope='col'> Action</th>
        <th scope='col'> Event Id</th>
        <th scope='col'> Month</th>
        <th scope='col'> Base Location</th>
        <th scope='col'> Council Name</th>
        <th scope='col'> Beneficiary Name</th>
      </tr>
    </thead>
  );
};

export default EventTableHeader;
