import React, { useState } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import Answer from "./Answer";
const AddOrEditQuestion = () => {
  let match = useRouteMatch();
  let location = useLocation();
  let history = useHistory();
  let { questions } = location.state;

  let questionDetail = questions.find(q => q.id === parseInt(match.params.id));
  let questionIndex = questions.findIndex(
    q => q.id === parseInt(match.params.id)
  );

  const [feedbackType, setFeedbackType] = useState(
    (questionDetail && questionDetail.feedbackType) || ""
  );
  const [isAllowMultipleAnswers, setIsAllowMultipleAnswers] = useState(
    (questionDetail && questionDetail.isAllowMultipleAnswers) || false
  );
  const [isFreeTextAnswer, setIsFreeTextAnswer] = useState(
    (questionDetail && questionDetail.isFreeTextAnswer) || false
  );

  //console.log(isFreeTextAnswer);
  const [isCustomQuestion, setIsCustomQuestion] = useState(
    (questionDetail && questionDetail.isCustomQuestion) || false
  );

  const [question, setQuestion] = useState(
    (questionDetail && questionDetail.question) || []
  );

  const [answers, setAnswers] = useState(
    (questionDetail && questionDetail.answers) || []
  );
  const onFeedbackTypeChange = e => {
    //console.log(e.target.value);
    setFeedbackType(e.target.value);
  };

  const saveHandler = e => {
    // console.log({
    //   ...questionDetail,
    //   feedbackType,
    //   isAllowMultipleAnswers,
    //   isFreeTextAnswer,
    //   isCustomQuestion,
    //   question,
    //   answers
    // });

    const updatedAllQuestions = questionDetail
      ? [
          ...questions.slice(0, questionIndex),
          {
            ...questionDetail,
            feedbackType,
            isAllowMultipleAnswers,
            isFreeTextAnswer,
            isCustomQuestion,
            question,
            answers,
            totalAnswers: answers.length
          },
          ...questions.slice(questionIndex + 1)
        ]
      : [
          ...questions,
          {
            id: Math.max(...questions.map(q => q.id), 0) + 1,
            feedbackType,
            isAllowMultipleAnswers,
            isFreeTextAnswer,
            isCustomQuestion,
            question,
            answers,
            totalAnswers: answers.length,
            actionType: "edit"
          }
        ];
    //console.log(updatedAllQuestions);
    history.push("/feedbackQuestions", { questions: updatedAllQuestions });
    e.preventDefault();
  };

  const deleteHandler = e => {
    const updatedAllQuestions = [
      ...questions.slice(0, questionIndex),
      ...questions.slice(questionIndex + 1)
    ];
    history.push("/feedbackQuestions", { questions: updatedAllQuestions });
    e.preventDefault();
  };

  const cancelHandler = e => {
    history.push("/feedbackQuestions", { questions: questions });
    e.preventDefault();
  };

  const deleteAnswerHandler = answerIndex => {
    const updatedAnswers = answers.filter(
      (answer, index) => index != answerIndex
    );

    setAnswers(updatedAnswers);
  };

  const answerTextHandler = (value, answerIndex) => {
    const updatedAnswers = answers.slice();
    updatedAnswers[answerIndex] = value;
    setAnswers(updatedAnswers);
  };

  const addNewAnswerHandler = e => {
    const updatedAnswers = answers.slice();
    updatedAnswers.push("");
    setAnswers(updatedAnswers);
    e.preventDefault();
  };

  return (
    <div className='card'>
      <div className='card-header card bg-primary text-white'>
        <h3>Add Question</h3>
      </div>
      <br />
      <form>
        <fieldset className='form-group'>
          <div className='row'>
            <legend className='col-form-label col-sm-3 pt-0'>
              Feedback Type
            </legend>
            <div className='col-sm-9'>
              <div className='form-check form-check-inline'>
                <input
                  type='radio'
                  name='feedbackType'
                  value='participated'
                  checked={"participated" === feedbackType}
                  onChange={onFeedbackTypeChange}
                  className='form-check-input'
                />
                <label className='form-check-label' htmlFor='gridRadios1'>
                  Participated
                </label>
              </div>

              <div className='form-check form-check-inline'>
                <input
                  type='radio'
                  name='feedbackType'
                  value='notparticipated'
                  checked={"notparticipated" === feedbackType}
                  onChange={onFeedbackTypeChange}
                  className='form-check-input'
                />
                <label className='form-check-label' htmlFor='gridRadios1'>
                  Not Participated
                </label>
              </div>

              <div className='form-check form-check-inline'>
                <input
                  type='radio'
                  name='feedbackType'
                  value='unregistered'
                  checked={"unregistered" === feedbackType}
                  onChange={onFeedbackTypeChange}
                  className='form-check-input'
                />
                <label className='form-check-label' htmlFor='gridRadios1'>
                  Unregistered
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className='form-group row'>
          <div className='col-sm-12'>
            <div className='form-check'>
              <input
                className='form-check form-check-inline'
                type='checkbox'
                name='isAllowMultipleAnswers'
                value='isAllowMultipleAnswers'
                checked={isAllowMultipleAnswers}
                onChange={e =>
                  setIsAllowMultipleAnswers(!isAllowMultipleAnswers)
                }
              />
              <label className='form-check-label' htmlFor='gridCheck1'>
                Allow Multiple Answers
              </label>
            </div>
          </div>
        </div>
        <div className='form-group row'>
          <div className='col-sm-12'>
            <div className='form-check checkbox'>
              <input
                className='form-check form-check-inline'
                type='checkbox'
                name='isFreeTextAnswer'
                value='isFreeTextAnswer'
                checked={isFreeTextAnswer}
                onChange={e => setIsFreeTextAnswer(!isFreeTextAnswer)}
              />
              <label className='form-check-label' htmlFor='gridCheck1'>
                Free Text Answer
              </label>
            </div>
          </div>
        </div>
        <div className='form-group row'>
          <div className='col-sm-12'>
            <div className='form-check'>
              <input
                className='form-check-input form-check form-check-inline'
                type='checkbox'
                name='isCustomQuestion'
                value='isCustomQuestion'
                checked={isCustomQuestion}
                onChange={e => setIsCustomQuestion(!isCustomQuestion)}
              />
              <label className='form-check-label' htmlFor='gridCheck1'>
                Custom Question
              </label>
            </div>
          </div>
        </div>

        <div className='form-group row'>
          <label htmlFor='question' className='col-sm-3 col-form-label'>
            Question
          </label>
          <div className='col-sm-7'>
            <input
              className='form-control'
              type='text'
              placeholder='Enter Question'
              name='question'
              value={question}
              onChange={e => setQuestion(e.target.value)}
            />
          </div>
        </div>

        {answers &&
          answers.map((answer, index, arr) => (
            <Answer
              key={index}
              answer={answer}
              index={index}
              count={arr.count}
              deleteAnswerHandler={answerIndex =>
                deleteAnswerHandler(answerIndex)
              }
              answerTextHandler={(value, answerIndex) =>
                answerTextHandler(value, answerIndex)
              }
            />
          ))}
        <div className='form-group row'>
          <div class='btn-toolbar col-sm-8 offset-sm-4'>
            <button className='btn btn-success' onClick={addNewAnswerHandler}>
              Add Answer
            </button>
          </div>
        </div>
        <div className='form-group row'>
          <div class='btn-toolbar col-sm-8 offset-sm-4'>
            <button className='btn btn-dark btn-sm mr-2' onClick={saveHandler}>
              Save
            </button>
            <button
              className='btn btn-primary btn-sm mr-2'
              onClick={cancelHandler}
            >
              Cancel
            </button>
            <button
              className='btn btn-danger btn-sm mr-2'
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddOrEditQuestion;
