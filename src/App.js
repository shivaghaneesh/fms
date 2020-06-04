import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Landing from "./Components/Layout/Landing";
import Reports from "./Components/Reports/Reports";
import Events from "./Components/Events/Events";
import Dashboard from "./Components/Dashboard/Dashboard";
import Configuration from "./Components/Configuration/Configuration";
import Roles from "./Components/Configuration/Roles/Roles";
import FeedbackQuestions from "./Components/Configuration/FeedbackQuestions/FeedbackQuestions";
import AddOrEditQuestion from "./Components/Configuration/FeedbackQuestions/AddOrEditQuestion";
import Actions from "./Components/Events/Actions";
import ReportActions from "./Components/Reports/Actions";
import EventAndBeneficiayDetails from "./Components/Events/EventsSection/EventAndBeneficiaryDetails/EventAndBeneficiayDetails";
import Preview from "./Components/Configuration/FeedbackQuestions/Preview";
import ThankYou from "./Components/Configuration/FeedbackQuestions/Feedback/ThankYou";

const App = () => {
  //let pathdetails = window.location.pathname;
  const hideNavbar = false; // pathdetails.includes("/feedbackQuestions/preview");
  return (
    <BrowserRouter>
      <main role='main'>
        {hideNavbar || <Navbar />}
        <section className='jumbotron text-center'>
          <div className='container'>
            <Route path='/events' component={Actions} />
            <Route path='/reports' component={ReportActions} />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/events' component={Events} />
              <Route
                exact
                path='/events/:id'
                component={EventAndBeneficiayDetails}
              />
              <Route exact path='/reports' component={Reports} />
              <Route exact path='/configuration' component={Configuration} />
              <Route exact path='/roles' component={Roles} />
              <Route
                exact
                path='/feedbackQuestions'
                component={FeedbackQuestions}
              />
              <Route
                exact
                path='/feedbackQuestions/addOrEdit/:id'
                component={AddOrEditQuestion}
              />
              <Route path='/feedbackQuestions/preview' component={Preview} />
              <Route path='/feedbackQuestions/ThankYou' component={ThankYou} />
            </Switch>
          </div>

          <footer className='card mt-5'>
            <div className='card-body'>
              <span className='text-muted'>
                © 2020 Outreach Feedback Management System Cognizant All Rights
                Reserved Reserved.
              </span>
            </div>
          </footer>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
