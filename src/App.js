import React, { useState } from "react";
import "./css/App.css";
import Question from "./components/Question.js";
import NextQuestion from "./components/NextQuestion.js";
import data from "./sample_data.json";

//css modules
import FinalScreenStyles from "./css/FinalScreen.module.css";
import BalloonStyles from "./css/Balloons.module.css";


function App() {
  let [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  let [answerState, setAnswerState] = useState(null);
  let [bgColorState, setbgColorState] = useState("white");

  /* returns the correct answer choice as a string:
    - data: access the "data" file imported at the top
    - [currentQuestionNumber]: index of object/current question
    - .question.choices: access "choices" 
    - [data[currentQuestionNumber].question.correct_choice_index]: index of correct answer
  */
  function getCorrectAnswer() {
    return data[currentQuestionNumber].question.choices[
      data[currentQuestionNumber].question.correct_choice_index
    ];
  }

  //goes to next question number and resets answerState to null
  function goToNextQuestion() {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setAnswerState(null);
  }

  //message displayed depending on user input
  function questionAnswered() {
    // condition/event: user doesn't click an answer choice
    if (answerState === null) {
      return <div>Click an answer above.</div>;
    }
    // condition/event: user clicks on correct answer choice
    else if (answerState === getCorrectAnswer()) {
      setbgColorState("green");
      return <div>Correct!</div>;
    }
    // condition/event: user clicks on wrong answer choice
    else if (answerState !== null && answerState !== getCorrectAnswer()) {
      setbgColorState("red");
      return <div>Wrong, try again.</div>;
    }
  }

  // final screen
  if (currentQuestionNumber > 4) {
    return (
      <div className={FinalScreenStyles.final}>
        <div className={FinalScreenStyles.finalYellowContainer}>
          <button
            className={FinalScreenStyles.playAgainButton}
            onClick={() => setCurrentQuestionNumber(0)}
          >
            Play Again
          </button>
        </div>

        <div class={BalloonStyles.balloon}></div>
        <div class={BalloonStyles.balloon}></div>
        <div class={BalloonStyles.balloon}></div>
        <div class={BalloonStyles.balloon}></div>
        <div class={BalloonStyles.balloon}></div>
        <div class={BalloonStyles.balloon}></div>
        <div class={BalloonStyles.balloon}></div>
      </div>
    );
  }

  // question screen
  return (
    <div className="app">
      <h1 className="title">Fast Food Trivia</h1>
      <div className="questionBox">
        <h3> {currentQuestionNumber + 1} / 5</h3>
        <Question
          setAnswerStateProp={setAnswerState}
          question={data[currentQuestionNumber].question}
        />

        {/*calls questionAnswered function*/}
        <p className="userMsg">{questionAnswered()}</p>

        {/* conditional rendering: Next Question button displays when user clicks on correct answer */}
        {answerState === getCorrectAnswer() && (
          // passes goToNextQuestion as value to the prop "click" in the NextQuestion component
          <NextQuestion click={goToNextQuestion} />
        )}
      </div>
    </div>
  );
}

export default App;
