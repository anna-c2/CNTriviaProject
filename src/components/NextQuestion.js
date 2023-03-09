function NextQuestion(props) {
  return (
    <div>
      {/* value of the prop "click" when user clicks the Next Question button */}
      <button className="nextButton" onClick={props.click}>Next Question</button>
    </div>
  );
}
export default NextQuestion;
