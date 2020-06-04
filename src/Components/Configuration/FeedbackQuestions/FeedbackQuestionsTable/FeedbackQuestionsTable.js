import React, { useState, Fragment } from "react";
import FeedbackQuestionsTableHeader from "./FeedbackQuestionsTableHeader";
import FeedbackQuestionsTableRow from "./FeedbackQuestionsTableRow";

import FeedbackQuestionsTablePagination from "./FeedbackQuestionsTablePagination";

const FeedbackQuestionsTable = props => {
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const startIndex = selectedPageNumber - 1;
  const endIndex = startIndex + recordsPerPage;
  const totalPages = Math.ceil(props.questions.length / recordsPerPage);

  const pages = [...new Array(totalPages).keys()];

  return (
    <Fragment>
      <div
        style={{
          overflowX: "auto"
        }}
      >
        <table className='table'>
          <FeedbackQuestionsTableHeader />

          <tbody>
            {props.questions.slice(startIndex, endIndex).map((question, id) => (
              <FeedbackQuestionsTableRow
                key={id + question.id}
                question={question}
                questions={props.questions}
              />
            ))}
          </tbody>
        </table>
      </div>
      {pages.map((item, index) => (
        <FeedbackQuestionsTablePagination
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

export default FeedbackQuestionsTable;
