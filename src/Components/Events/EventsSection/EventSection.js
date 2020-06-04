import React from "react";
import EventFilterAndDowLoadExcel from "./EventFilterAndDowLoadExcel";
import EventTable from "./EventTable/EventTable";

const EventSection = () => {
  return (
    <div className='card '>
      <div className='card-header card bg-primary text-white'>EVENTS</div>
      <br></br>
      <EventFilterAndDowLoadExcel />

      <EventTable />
    </div>
  );
};

export default EventSection;
