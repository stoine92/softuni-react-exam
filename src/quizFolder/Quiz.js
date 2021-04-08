import { Component } from "react";
import "./quiz.css";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import Header from '../commons/Header/Header';
import Footer from '../commons/Footer/Footer';

class Quiz extends Component {
  state = {
    questions: {
      1: 'Who is the director of Star Wars?',
      2: "Who is the son of Darth Vader?",
      3: "When was the first movie launched?",
      4: "Who are the only two characters who appear in every Star Wars movie?",
      5: "Who played Princess Leia?",
      6: "How old was Yoda when he died?",
      7: "Which movie is the one where Luke finds out Vader is his father?",
      8: "Who originally played Han Solo?",
      9: "Which order brought about the death of the Jedi?",
      10: "What is the space station of the Empire called?",
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
      },
      5: {
        1: "Natalie Portman",
        2: "Carrie Fisher",
        3: "Jennifer Aniston",
      },
      6: {
        1: "700",
        2: "900",
        3: "1100",
      },
      7: {
        1: "A New Hope ",
        2: "The Empire Strikes Back ",
        3: "Return of the Jedi ",
      },
      8: {
        1: "Harrison Ford ",
        2: "Mark Hamill",
        3: "Alec Guinness ",
      },
      9: {
        1: "Order 64 ",
        2: "Order 65 ",
        3: "Order 66 ",
      },
      10: {
        1: "Citadel of Rur ",
        2: "Brooksdion ",
        3: "The Death Star ",
      },
      
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "1",
      4: "3",
      5: "2",
      6: "2",
      7: "2",
      8: "1",
      9: "3",
      10: "3",
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
