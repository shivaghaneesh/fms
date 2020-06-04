import React from "react";
import { useHistory } from "react-router-dom";
const UnRegisteredFeedback = () => {
  let history = useHistory();

  const submitHandler = () => {
    history.push("/feedbackQuestions/ThankYou");
  };
  return (
    <div>
      <div class='row'>
        <div class='col-md-12 mb-3'>
          <div class='card'>
            <div class='card-body text-center text-success font-weight-bold'>
              Feedback request for 1st Dec PM-Chirstmas fair to save a school
              swimming pool on Dec 14, 2019
            </div>
          </div>
        </div>
      </div>

      <div class='row'>
        <div class='col-md-12'>
          <div class='card'>
            <div class='card-header bg-primary font-weight-bold text-white'>
              Hey there, Please share your Feedback for Unregistered from the
              event ?
            </div>
            <div class='card-body'>
              <div class='row text-white text-center'>
                <div class='col-sm-2'>
                  <a class='card bg-dark' href=''>
                    <div class='card-body'>
                      <p class='card-text'>Unexpected Personal Committment</p>
                    </div>
                  </a>
                </div>
                <div class='col-sm-2'>
                  <a class='card bg-dark' href=''>
                    <div class='card-body'>
                      <p class='card-text'>Unexpected Official Work</p>
                    </div>
                  </a>
                </div>
                <div class='col-sm-2'>
                  <a class='card bg-dark' href=''>
                    <div class='card-body'>
                      <p class='card-text'>Even Not What I Expected</p>
                    </div>
                  </a>
                </div>
                <div class='col-sm-2'>
                  <a class='card bg-dark' href=''>
                    <div class='card-body'>
                      <p class='card-text'>
                        Did Not Receive Further Information About The Event
                      </p>
                    </div>
                  </a>
                </div>
                <div class='col-sm-2'>
                  <a class='card bg-dark' href=''>
                    <div class='card-body'>
                      <p class='card-text'>Incorrectly Registered</p>
                    </div>
                  </a>
                </div>
                <div class='col-sm-2'>
                  <a class='card bg-dark' href=''>
                    <div class='card-body'>
                      <p class='card-text'>Do Not Wish to Disclose</p>
                    </div>
                  </a>
                </div>
              </div>

              <div class='float-right'>
                <button type='button' class='btn btn-danger disabled'>
                  RESET
                </button>
                <button
                  type='button'
                  class='btn btn-success ml-2'
                  onClick={submitHandler}
                >
                  <i class='fa fa-paper-plane'></i>
                  <span class='pl-1'>SUBMIT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------------------------------------------------------*/}
    </div>
  );
};

export default UnRegisteredFeedback;
