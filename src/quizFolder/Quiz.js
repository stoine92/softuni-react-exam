import { Component } from "react";
import "./quiz.css";
import Question from "./question/Question";
import Answer from "./answer/Answer";

class Quiz extends Component {
  state = {
    questions: {
      1: 'What US city is known as the "birthplace of jazz"?',
      2: 'What is the capital of Greece?',
      3: 'What planet gave birth to Superman?',
    },
    answers: {
      1: { 1: 'Chicago', 2: 'New Orleans', 3: 'New York' },
    },
    2: {
      1: 'Athens',
      2: "Patras",
      3: 'Kalamata'
    },
    3: {
      1: "Krypton",
      2: 'Mars',
      3: 'Earth'
    },
    correctAnswers: {
      1: '2',
      2: '1',
      3: '1',
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };
  checkAnswer = answer => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };
  render() {
    let { questions, step, correctAnswer, clickedAnswer, answers } = this.state;
    return (
      <>
        <div className="quizDiv">
          <Question question={questions[step]} />
          <Answer
            answer={answers[step]}
            step={step}
            checkAnswer={this.checkAnswer}
            correctAnswer={correctAnswer}
            clickedAnswer={clickedAnswer}
          />
        </div>
      </>
    );
  }
}

export default Quiz;
