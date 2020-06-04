const ListOfQuestions = [
  {
    id: 1,

    question:
      "Hey there, Please share your feedback for unregistering from the event",
    totalAnswers: 6,
    feedbackType: "unregistered",
    actionType: "edit",
    answers: [
      "unexpected personal commitments",
      "unexpected official work",
      "Incorrectly registered",
      "Do not wish to enclose",
      "Did not recieve further communication about the event",
      "Event not what I expected"
    ],
    isAllowMultipleAnswers: true,
    isFreeTextAnswer: true,
    isCustomQuestion: true
  },

  {
    id: 2,

    question: "Question 2",
    totalAnswers: 56,
    feedbackType: "notparticipated",
    actionType: "edit",
    answers: ["Event not what I expected"],
    isAllowMultipleAnswers: false,
    isFreeTextAnswer: true,
    isCustomQuestion: true
  }
];

export default ListOfQuestions;
