import React from "react";

const RolesTablePagination = props => {
  return (
    <button onClick={() => props.onPageChange(props.pageNumber)}>
      <i className='text-primary p'>{props.pageNumber}</i>
    </button>
  );
};

export default RolesTablePagination;
