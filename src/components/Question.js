//import React from "react";
import AnswerChoice from "./AnswerChoice";

function Question(props) {
  return (
    <div className = "vertical">
      <p className = "questionText"> {props.question.text} </p>
      <img src = {props.question.image} alt="pic"/>
      {props.question.choices.map((choice, index) => (
        <AnswerChoice
          setAnswerState={props.setAnswerStateProp}
          answer={choice}
        />
      ))}
    </div>
  );
}

export default Question;
