import React from "react";

const ReportTableRow = props => {
  const {
    eventid,
    beneficiaryName,
    baseLocation,
    councilName,
    project,
    businessUnit,
    averageRating,
    starRating
  } = props.event;

  return (
    <tr className='bg-light'>
      <td className='bg-light'>{eventid}</td>
      <td className='hide-sm bg-light'>{beneficiaryName}</td>
      <td className='hide-sm bg-light'>{baseLocation}</td>
      <td className='hide-sm bg-light'>{councilName}</td>
      <td className='hide-sm bg-light'>{project}</td>
      <td className='hide-sm bg-light'>{businessUnit}</td>
      <td className='hide-sm bg-light'>{averageRating}</td>
      <td className='hide-sm bg-light'>{starRating}</td>
    </tr>
  );
};

export default ReportTableRow;
