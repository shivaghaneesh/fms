import React, { useState } from "react";
import EventTableHeader from "./EventTableHeader";
import EventTableRow from "./EventTableRow";
import ListOfEvents from "../../Data/ListOfEvents";
import EventTablePagination from "./EventTablePagination";

const EventTable = () => {
  let [events, setEvents] = useState(ListOfEvents);
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(1);

  const startIndex = selectedPageNumber - 1;
  const endIndex = startIndex + recordsPerPage;
  const totalPages = Math.ceil(events.length / recordsPerPage);

  const pages = [...new Array(totalPages).keys()];

  return (
    <table className='table'>
      <EventTableHeader />
      <tbody>
        {events.slice(startIndex, endIndex).map(event => (
          <EventTableRow key={event.eventid} event={event} />
        ))}
        <tr>
          {pages.map((item, index) => (
            <EventTablePagination
              key={index}
              pageNumber={item + 1}
              selectedPageNumber={selectedPageNumber}
              onPageChange={selectedPageNumber =>
                setSelectedPageNumber(selectedPageNumber)
              }
            />
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default EventTable;
