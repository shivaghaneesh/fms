import React from "react";
import EventDetailText from "../../Data/EventDetailText";
const EventDetail = props => {
  return (
    <tr>
      <td colSpan='2'>{EventDetailText[props.detail[0]]}</td>
      <td colSpan='3'>{props.detail[1]}</td>
    </tr>
  );
};

export default EventDetail;
