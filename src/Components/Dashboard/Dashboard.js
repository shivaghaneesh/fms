import React from "react";
import TotalEvents from "./TotalEvents";
import LivesImpacted from "./LivesImpacted";
import TotalVolunteers from "./TotalVolunteers";
import TotalParticipants from "./TotalParticipants";

const Dashboard = () => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row'>
          <TotalEvents />
          <LivesImpacted />
          <TotalVolunteers />
          <TotalParticipants />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
