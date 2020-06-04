import React from "react";
import { useHistory } from "react-router-dom";

const FeedbackQuestionsTableRow = props => {
  const {
    question,
    totalAnswers,
    feedbackType,
    actionType,
    id
  } = props.question;
  let history = useHistory();

  const addOrEditQuestionHandler = () => {
    history.push({
      pathname: "/feedbackQuestions/addOrEdit/" + id,
      state: { questions: props.questions }
    });
  };

  const previewQuestionHandler = () => {
    history.push({
      pathname: "/feedbackQuestions/preview/" + id,
      state: { questions: props.questions }
    });
  };

  return (
    <tr>
      <td>{question}</td>
      <td>{totalAnswers}</td>
      <td>{feedbackType}</td>
      <td>
        <button
          type='button'
          className='btn btn-primary btn-sm'
          onClick={addOrEditQuestionHandler}
        >
          {actionType}
        </button>
        <span>&nbsp;&nbsp;</span>
        <button
          type='button'
          className='btn btn-primary btn-sm'
          onClick={previewQuestionHandler}
        >
          Preview
        </button>
      </td>
    </tr>
  );
};

export default FeedbackQuestionsTableRow;
