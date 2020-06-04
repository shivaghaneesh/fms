import React, { useState, Fragment } from "react";
import ReportTableHeader from "./ReportTableHeader";
import ReportTableSubHeader from "./ReportTableSubHeader";
import ReportTableRow from "./ReportTableRow";
import ListOfEventsInReportTable from "../Data/ListOfEventsInReportTable";
import ReportTablePagination from "./ReportTablePagination";

const ReportTable = () => {
  let [events, setEvents] = useState(ListOfEventsInReportTable);
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const startIndex = selectedPageNumber - 1;
  const endIndex = startIndex + recordsPerPage;
  const totalPages = Math.ceil(events.length / recordsPerPage);

  const pages = [...new Array(totalPages).keys()];

  return (
    <Fragment>
      <div
        style={{
          overflowX: "auto"
        }}
      >
        <table className='table'>
          <ReportTableHeader />
          <ReportTableSubHeader />
          <tbody>
            {events.slice(startIndex, endIndex).map(event => (
              <ReportTableRow key={event.eventid} event={event} />
            ))}
          </tbody>
        </table>
      </div>
      {pages.map((item, index) => (
        <ReportTablePagination
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

export default ReportTable;
