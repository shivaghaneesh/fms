import React from "react";

const ReportTablePagination = props => {
  return (
    <button onClick={() => props.onPageChange(props.pageNumber)}>
      <i className='text-primary p'>{props.pageNumber}</i>
    </button>
  );
};

export default ReportTablePagination;
