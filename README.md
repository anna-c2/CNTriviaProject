# Trivia App Starter Code!

## Project Description

In this unit, coders will work in groups to build a project using HTML, CSS, React. Their task is to build out the front-end for a Kahoot style question game that displays a question and the possible answers, allows a user to choose answer and determine whether they are right or wrong.

<br>

---

<br>

## Section 1: Intro to React

### Project Planning

- [ ] Open up the Project Planning Document
- [ ] Look over the "Inspiration and Ideas" section
- [ ] Complete the "Let's Brainstorm" section.
- [ ] Complete the "Trivia" section.
- [ ] Update the json file with your own questions/answers.
      <br>

---

<br>

## Section 2: React Components, JSX, and Props

### Goal 1: Render a question from sample_data.json on the screen.

In the components folder:

- [ ] Create a new js file for a Question component (be sure to capitalize the first letter!)
- [ ] Check that you have:

  - [ ] Used the function keyword.
  - [ ] Named the component Question.
  - [ ] Included a return statement with an empty div.
  - [ ] Exported the Question component at the end.

In App.js:

- [ ] Render an instance of `<Question />` inside the return statement of `<App />`.
- [ ] Add a prop called `question` to `<Question />` with the value equal to "Question goes here".
- [ ] In `<App />`, add a variable called currentQuestionNumber and set it equal to 0.

Now, we want our question prop to show an actual question from our data file!

- [ ] Using bracket notation, replace "Question goes here" with the `question.text` field found in data for the first question.
  - [ ] HINT: Use the currentQuestionNumber variable you just wrote.

> ![Day 1.0 goal](https://i.imgur.com/eTZAXGk.png)

### Goal 2: Render a "Next Question" button on the screen.

In the components folder:

- [ ] Create a new js file for a NextQuestion component (be sure to capitalize the first letter!)

- [ ] Check that you have:

  - [ ] Used the function keyword.
  - [ ] Named the component Question.
  - [ ] Included a return statement with a div that has a button element that has the content "Next Question" and a paragraph tag that says “Question #”.
  - [ ] Exported the NextQuestion component at the end.
  - [ ] The component is imported to your App.js file.

In App.js:

- [ ] After the Question component, render an instance of `<NextQuestion />` inside the return statement of `<App />` (it will not work yet).

> ![Day 1.5 goal](https://i.imgur.com/o4MzPjL.png)

<br>

---

<br>

## Section 3: Nested Components and State

### Goal 1: Render the answer choices from sample_data.json on the screen.

In the components folder:

- [ ] Create a new js file for an AnswerChoices component (be sure to capitalize the first letter!)
- [ ] Check that you have:

  - [ ] Used the function keyword.
  - [ ] Named the component AnswerChoices.
  - [ ] Included a return statement with an empty div that has a className of “answer-choice”.
  - [ ] Exported the AnswerChoices component at the end.

In the Question component:

- [ ] Render an instance of `<AnswerChoices />` inside of `<Question />`.
- [ ] Add a prop called `answer` to `<Answer />` with the value equal to "Answer choice goes here".
- [ ] Be sure to pass your props into the `<Answer />` component.

In the App.js file:

- [ ] Pass a prop for the answer choices in `<Question />`.
  - [ ] We want to use the data from our json file!

In the Question and AnswerChoices components:

- [ ] Use those passed props so that the Answer components inside `<Question />` display the answer choices.

> ![Day 2.0 goal](https://i.imgur.com/VpA8eRc.png)

### Goal 2: Create state variables and functions that utilize state.

In `<App />` (before the return statement):

Declare state variables:

- [ ] Refactor your currentQuestionNumber variable to a state variable. The value should remain 0.
- [ ] Using `useState`, create a new variable called `answerDisplayed` and set it equal to a value of null. (This is to keep track of whether the correct answer is shown)

Declare getCorrectAnswer function:

- [ ] Create a function called getCorrectAnswer that takes questionNum as a parameter. Based on the data that's imported, this function should:
  - [ ] Declare variables that represent the current question and correct choice index - assign their appropriate values.
  - [ ] Return the correct choice of the current question.

Declare questionAnswered function:

- [ ] Create a function called questionAnswered. This function should have a conditional statement that includes:
  - [ ] If the `answerState` is `null`, return a message that says "Click an answer above."
  - [ ] If the `answerState` is correct, return a message that states what they chose is correct.
  - [ ] Anything else, return a message that states what they chose is incorrect.

Declare goToNextQuestion function:

- [ ] Create a function called goToNextQuestion. This function should:
  - [ ] Update the state of currentQuestionNum to itself plus 1.
  - [ ] Updated the state of answerState to `null`.

<!-- > ![Day 2.5 goal - unanswered](https://i.imgur.com/JI6GroE.png) >![Day 2.5 goal - answered](https://i.imgur.com/rufYX84.png) -->

<br>

---

<br>

## Section 4: Event Handlers & Refactoring

### Goal 1: Add functionality to your "Next Question" button so that it renders the next question when clicked.

- [ ] Create a prop on `<NextQuestion />` for your goToNextQuestion function.
- [ ] Pass the prop down to the button element in that component so that it calls the goTonextQuestion function when the button is clicked.
- [ ] Pass the prop down to the paragraph tag in that component so that it shows the current question number.

### Goal 2: Add functionality so that when the user clicks on an answer choice, the correct answer appears.

Inside the `<App />` return statement:

- [ ] Add props to `<Question />`. One that represents the answer choices and another for the answerState function.
- [ ] Check that every part of your Question and AnswerChoices components have their props passed.
- [ ] Call the questionAnswered function.

Inside the AnswerChoices component:

- [ ] Add an event handler that updates the state to be the choice that the user clicks.
  - HINT: Use props to pass down the state from `<App />`.
  - HINT: Don't forget to pass your `onClick` down as a prop as well.

### Goal 3: Refactors components to use map where you see multiple instances.

- [ ] Use map to loop through the Answer component.

## Extensions!

- [ ] Create a TriviaStatusBar component that takes answerState and correctAnswerState as props.
- [ ] See if you can make the Next Question button only show after a question has been answered and to stop showing when all questions are answered!
  - HINT: Look up [conditional rendering](https://reactjs.org/docs/conditional-rendering.html))
- [ ] Make a timer that resets the game when the timer runs out.
- [ ] Make a counter that keeps track of how many times you've guessed the correct answer.
- [ ] Change the color of the answer buttons when the user guesses. For example turn the button with the correct answer to green.
- [ ] Make it a two player game.
- [ ] Anything else you want!
