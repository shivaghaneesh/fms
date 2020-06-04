import React from "react";

const RolesTableRow = props => {
  const { email, firstName, lastName } = props.role;

  return (
    <tr className='bg-light'>
      <td className='bg-light'>{email}</td>
      <td className='hide-sm bg-light'>{firstName}</td>
      <td className='hide-sm bg-light'>{lastName}</td>
    </tr>
  );
};

export default RolesTableRow;
