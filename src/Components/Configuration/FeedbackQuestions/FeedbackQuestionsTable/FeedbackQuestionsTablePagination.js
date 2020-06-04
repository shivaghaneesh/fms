import React from "react";

const FeedbackQuestionsTablePagination = props => {
  return (
    <button onClick={() => props.onPageChange(props.pageNumber)}>
      <i className='text-primary p'>{props.pageNumber}</i>
    </button>
  );
};

export default FeedbackQuestionsTablePagination;
