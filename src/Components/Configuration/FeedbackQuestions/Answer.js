import React from "react";

const Answer = props => {
  const deleteAnswerHandler = e => {
    props.deleteAnswerHandler(props.index);
    e.preventDefault();
  };

  return (
    <div className='form-group row'>
      <label htmlFor='answer' className='col-form-label col-sm-3'>
        Answer {Number(props.index) + 1}
      </label>
      <div className='col-sm-7'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder={"Enter Answer " + Number(props.index + 1)}
            name='answer'
            value={props.answer}
            onChange={e => props.answerTextHandler(e.target.value, props.index)}
          />
        </div>
      </div>
      <div class='col-sm-2'>
        <button
          className='btn btn-danger btn-sm'
          onClick={e => deleteAnswerHandler(e)}
        >
          Delete Answer
        </button>
      </div>
    </div>
  );
};

export default Answer;
