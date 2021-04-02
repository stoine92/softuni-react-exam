import { Component } from "react";
import "./quiz.css";
import Question from './question/Question';
import Answer from './answer/Answer'

class Quiz extends Component {
  state = {
    questions: {
      1: "First",
      2: "What",
      3: "Where",
    },
    answers: {
      1: { 1: "Chicago", 2: "Yes", 3: "No" },
    },
    correctAnswers: {
        1: "ascx",
        2: "asd",
        3: "xa",
    },
    correctAnswers: 0,
    clickedAnswers: 0,
    step: 1,
    score: 0,

  };
  checkAnswer = (answer) => {
    const {correctAnswers, step, score} = this.state;
    if(answer === correctAnswers[step]){
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers
      })
    }
  }
  render() {
      let {questions, step, answers} = this.state;
    return (
      <>
        <div className="quizDiv">
          <Question question={questions[step]}/>
          <Answer answer={answers[step]} step={step} checkAnswer={this.checkAnswer}/>
        </div>
      </>
    );
  }
}

export default Quiz;
