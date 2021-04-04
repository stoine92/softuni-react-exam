import "./answer.css";

const Answer = (props) => {
  let answer = Object.keys(props.answer).map((qAnswer, i) => (
    <li
      className={
        props.correctAnswer === qAnswer ? 'correct' : props.clickedAnswer === qAnswer ? 'incorrect' : ""
      }
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));
  return (
    <ul className="answers">
      <li>{answer}</li>
    </ul>
  );
};

export default Answer;
