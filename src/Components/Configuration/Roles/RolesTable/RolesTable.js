import React, { useState, Fragment } from "react";
import RolesTableHeader from "./RolesTableHeader";
import RolesTableRow from "./RolesTableRow";

import RolesTablePagination from "./RolesTablePagination";

const RolesTable = props => {
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const startIndex = selectedPageNumber - 1;
  const endIndex = startIndex + recordsPerPage;
  const totalPages = Math.ceil(props.roles.length / recordsPerPage);

  const pages = [...new Array(totalPages).keys()];

  return (
    <Fragment>
      <div
        style={{
          overflowX: "auto"
        }}
      >
        <table className='table'>
          <RolesTableHeader />

          <tbody>
            {props.roles.slice(startIndex, endIndex).map((role, id) => (
              <RolesTableRow key={id + role.email} role={role} />
            ))}
          </tbody>
        </table>
      </div>
      {pages.map((item, index) => (
        <RolesTablePagination
          key={index}
          pageNumber={item + 1}
          selectedPageNumber={selectedPageNumber}
          onPageChange={selectedPageNumber =>
            setSelectedPageNumber(selectedPageNumber)
          }
        />
      ))}
    </Fragment>
  );
};

export default RolesTable;
