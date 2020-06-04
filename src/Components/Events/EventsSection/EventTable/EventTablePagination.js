import React from "react";

const EventTablePagination = props => {
  return (
    <td colSpan='6'>
      <button onClick={() => props.onPageChange(props.pageNumber)}>
        <i className='text-primary p'>{props.pageNumber}</i>
      </button>
    </td>
  );
};

export default EventTablePagination;
