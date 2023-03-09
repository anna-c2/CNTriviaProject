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

- [ ] Create a new js file for an AnswerChoice component (be sure to capitalize the first letter!)
- [ ] Check that you have:

  - [ ] Used the function keyword.
  - [ ] Named the component AnswerChoice.
  - [ ] Included a return statement with an empty div that has a className of “answer-choice”.
  - [ ] Exported the AnswerChoice component at the end.

In the Question component:

- [ ] Render an instance of `<AnswerChoice />` inside of `<Question />`.
- [ ] Add a prop called `answer` to `<AnswerChoice />` with the value equal to "Answer choice goes here".
- [ ] Be sure to pass your props into the `<AnswerChoice />` component.

In the App.js file:

- [ ] Pass a prop for the answer choices in `<Question />`.
  - [ ] We want to use the data from our json file!

In the Question and AnswerChoices components:

- [ ] Use those passed props so that the AnswerChoice components inside `<Question />` display the answer choices.

**\*\***\*\*\*\***\*\***\_\_\_\_**\*\***\*\*\*\***\*\*** READ BELOW

> ![Day 2.0 goal](https://i.imgur.com/VpA8eRc.png)

### Goal 2: Create state variables and functions that utilize state.

In `<App />` (before the return statement):

Declare state variables:

- [ x] Refactor your currentQuestionNumber variable to a state variable. The value should remain 0.
- [ x] Using `useState`, create a new variable called `answerState` and set it equal to a value of null. (This is to keep track of whether the correct answer is shown)

Declare getCorrectAnswer function:

- [ x] Create a function called getCorrectAnswer. This function should:
  - [ x] Return the correct answer of the current question, using the currentQuestionNumber state.

Declare questionAnswered function:

- [ x] Create a function called questionAnswered. This function should have a conditional statement that includes:
  - [ x] If the `answerState` is `null`, return a string that says "Click an answer above."
  - [ x] If the `answerState` is equal to getCorrectAnswer(), return a string that states what they chose is correct.
  - [ x] Anything else, return a string that states what they chose is incorrect.

Declare goToNextQuestion function:

- [ x] Create a function called goToNextQuestion. This function should:
  - [ x] Update the state of currentQuestionNum to itself plus 1.
  - [x] Updated the state of answerState to `null`.

<!-- > ![Day 2.5 goal - unanswered](https://i.imgur.com/JI6GroE.png) >![Day 2.5 goal - answered](https://i.imgur.com/rufYX84.png) -->

<br>

---

<br>

## Section 4: Event Handlers & Refactoring

### Goal 1: Add functionality to your "Next Question" button so that it renders the next question when clicked.

- [x] Create a prop on `<NextQuestion />` for your goToNextQuestion function.
- [x] Pass the prop down to the button element in that component so that it calls the goTonextQuestion function when the button is clicked.
- [x] Pass the prop down to the paragraph tag in that component so that it shows the current question number.

### Goal 2: Add functionality so that when the user clicks on an answer choice, the correct answer appears.

Inside the `<App />` return statement:

- [] Pass setAnswerState as a prop to `<Question />`.
- [x] Call the questionAnswered function inside of a <p></p> tag.

Inside the Question component:

- [x] Pass the setAnswerState function down to AnswerChoice as a prop

Inside the AnswerChoice component:

- [x] Add an event handler that calls setAnswerState with the choice that the user clicks.
  - HINT: Use props to pass down the state function from `<App />`
  - HINT: .Call this in the button `onClick`

### Goal 3: Refactors components to use map where you see multiple instances.

- [x] Use map to loop through the choices for AnswerChoice component.

## Extensions!

- [ ] Create a TriviaStatusBar component that takes answerState and correctAnswerState as props.
- [x] See if you can make the Next Question button only show after a question has been answered and to stop showing when all questions are answered!
  - HINT: Look up [conditional rendering](https://reactjs.org/docs/conditional-rendering.html))
- [ ] Make a timer that resets the game when the timer runs out.
- [ ] Make a counter that keeps track of how many times you've guessed the correct answer.
- [ ] Change the color of the answer buttons when the user guesses. For example turn the button with the correct answer to green.
- [ ] Make it a two player game.
- [ ] Anything else you want!
