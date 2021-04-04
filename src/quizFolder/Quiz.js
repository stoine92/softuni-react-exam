import { Component } from "react";
import "./quiz.css";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import Header from '../commons/Header/Header';
import Footer from '../commons/Footer/Footer';

class Quiz extends Component {
  state = {
    questions: {
      1: 'Who is the director of Star Wars"?',
      2: "Who is the son of Darth Vader?",
      3: "When was the first movie launched?",
      4: "Who are the only two characters who appear in every Star Wars movie?",
      // 5: "",
      // 6: "",
      // 7: "",
      // 8: "",
      // 9: "",
      // 10: "",
    },
    answers: {
      1: { 1: "Stephen King", 2: "George Lucas", 3: "Stephen Spielberg" },

      2: {
        1: "Luke Skywalker",
        2: "Obi-Wan Kenobi",
        3: "R2-D2",
      },
      3: {
        1: "1977",
        2: "1982",
        3: "1978",
      },
      4: {
        1: "Han Solo and R2-D2",
        2: "Yoda and Luke Skywalker",
        3: "C-3PO and R2-D2",
      }
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "1",
      4: "3",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };
  checkAnswer = (answer) => {
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

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };
  render() {
    let {
      questions,
      step,
      correctAnswer,
      clickedAnswer,
      answers,
      score,
    } = this.state;
    return (
      <>
      <Header />
        <div className="quizDiv">
          {step <= Object.keys(questions).length ? (
            <>
              <Question question={questions[step]} />
              <Answer
                answer={answers[step]}
                step={step}
                checkAnswer={this.checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
              />
              <button
                className="NextStep"
                disabled={
                  clickedAnswer && Object.keys(questions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.nextStep(step)}
              >
                Next
              </button>
            </>
          ) : (
            <div className="finalPage">
              <h1>You have finished the quiz!</h1>
              <p>
                Your score is: {score} of {Object.keys(questions).length}
              </p>
              <p>Thanks!</p>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Quiz;
