import React, { useState } from "react";
import AssignPmo from "./AssignPmo";
import PmoUsers from "./PmoUsers";
import ListOfRoles from "./Data/ListOfRoles";

const Roles = () => {
  const [roles, setRoles] = useState(ListOfRoles);
  return (
    <>
      <AssignPmo setRoles={setRoles} roles={roles} />
      <br />
      <PmoUsers roles={roles} />
    </>
  );
};

export default Roles;
