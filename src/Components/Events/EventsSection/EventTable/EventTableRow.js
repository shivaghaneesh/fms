import React from "react";
import EventDetail from "./EventDetail";
import { useHistory } from "react-router-dom";

const EventTableRow = props => {
  const {
    actionType,
    eventid,
    month,
    baseLocation,
    councilName,
    beneficiaryName,
    eventDetails
  } = props.event;

  let history = useHistory();
  const eventDetailsHandler = () => {
    history.push({
      pathname: `/events/${eventid}`,
      state: { event: props.event }
    });
  };
  return (
    <tr>
      <td>
        <button onClick={eventDetailsHandler}>{actionType}</button>
      </td>
      <td colSpan='5'>
        <table>
          <tbody>
            <tr>
              <td colSpan='1'>{eventid}</td>
              <td colSpan='1'>{month}</td>
              <td colSpan='1'>{baseLocation}</td>
              <td>{councilName}</td>
              <td>{beneficiaryName}</td>
            </tr>
            {Object.entries(eventDetails).map(detail => (
              <EventDetail key={detail[0]} detail={detail} />
            ))}
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default EventTableRow;
