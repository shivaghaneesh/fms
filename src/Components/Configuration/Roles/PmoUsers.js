import React from "react";
import RolesTable from "./RolesTable/RolesTable";
import RolesFilterAndDowLoadExcel from "./RolesTable/RolestFilterAndDowLoadExcel";

const PmoUsers = props => {
  return (
    <div>
      <div className='card '>
        <div className='card-header card bg-primary text-white'>PMO Users</div>
      </div>
      <RolesFilterAndDowLoadExcel />
      <RolesTable roles={props.roles} />
    </div>
  );
};

export default PmoUsers;
