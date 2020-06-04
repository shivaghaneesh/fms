import React, { useState, useEffect } from "react";
import FeedbackQuestionsTable from "./FeedbackQuestionsTable/FeedbackQuestionsTable";
import ListOfQuestions from "./Data/ListOfQuestions";
import { useHistory, useLocation } from "react-router-dom";

const FeedbackQuestions = () => {
  let [questions, setQuestions] = useState(ListOfQuestions);
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    if (location.state && location.state.questions) {
      setQuestions(location.state.questions);
    }
  }, [location.state]);

  const addOrEditQuestionHandler = () => {
    history.push({
      pathname: "/feedbackQuestions/addOrEdit/0",
      state: { questions: questions }
    });
  };

  return (
    <div>
      <div className='card '>
        <div className='card-header card bg-primary text-white'>
          <h3>Feedback Questions</h3>
        </div>
      </div>
      <br />
      <div className='col-lg-12'>
        <button
          type='button'
          className='btn btn-sm float-right'
          onClick={addOrEditQuestionHandler}
        >
          <i className='fa fa-file text-dark'></i> Add Question
        </button>

        <button type='button' className='btn btn-sm float-right'>
          <i className='fa fa-filter text-danger'></i> Clear Filter
        </button>
      </div>
      <br />
      <br />
      <FeedbackQuestionsTable questions={questions} />
    </div>
  );
};

export default FeedbackQuestions;
