import React from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import EventDescription from "./EventDescription";
import EventLocation from "./EventLocation";
import Participated from "../Participation/Participated";
import NotParticipated from "../Participation/NotParticipated";
import UnRegistered from "../Participation/UnRegistered";
import Statistics from "../StatisticsAndPocDetails/Statistics";
import PocDetails from "../StatisticsAndPocDetails/PocDetails";

const EventAndBeneficiayDetails = () => {
  const match = useRouteMatch("/event/:id");
  const location = useLocation();
  let eventDescription = {};
  let eventLocation = {};
  let participated, notParticipated, unRegistered, pocDetails;
  let volunteerData = {};

  ({
    eventid: eventDescription.eventid,
    eventDetails: {
      eventName: eventDescription.eventName,
      eventDate: eventDescription.eventDate,
      businessUnit: eventDescription.businessUnit,
      status: eventDescription.status,
      venueAddress: eventLocation.venueAddress,
      totalVolunteers: volunteerData.totalVolunteers,
      totalVolunteerHours: volunteerData.totalVolunteerHours,
      totalTravelHours: volunteerData.totalTravelHours
    },
    description: eventDescription.description,
    category: eventDescription.category,
    baseLocation: eventLocation.baseLocation,
    councilName: eventLocation.councilName,
    beneficiaryName: eventLocation.beneficiaryName,
    feedBacks: eventLocation.feedBacks,
    averageRating: volunteerData.averageRating,
    livesImpacted: volunteerData.livesImpacted,
    participated,
    notParticipated,
    unRegistered,
    pocDetails
  } = location.state.event);
  //console.log(PocDetails);
  return (
    <div>
      <br />
      <div className='card '>
        <div className='card-header card bg-primary text-white'>
          <h3>Event And Beneficiary Details</h3>
        </div>
      </div>
      <div className='row'>
        <EventDescription eventDescription={eventDescription} />
        <EventLocation eventLocation={eventLocation} />
      </div>
      <br />
      <div className='row'>
        <Participated participated={participated} />
        <NotParticipated notParticipated={notParticipated} />
        <UnRegistered unRegistered={unRegistered} />
      </div>
      <br />
      <div className='row'>
        <Statistics volunteerData={volunteerData} />
        <PocDetails pocDetails={pocDetails} />
      </div>
    </div>
  );
};

export default EventAndBeneficiayDetails;
