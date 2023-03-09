function AnswerChoice(props) {
  return (
    <div>
      <button
        className="answerChoice"
        onClick={() => props.setAnswerState(props.answer)}
      >
        <div className="answer-choice">{props.answer}</div>
      </button>
    </div>
  );
}
export default AnswerChoice;
