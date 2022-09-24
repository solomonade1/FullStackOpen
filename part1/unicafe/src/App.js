import { useState } from "react";
import "./unicafe.css";

const Header = () => {
  return <h2>give feedback</h2>;
};

const Statistic = ({ text, value }) => {
  return (
    <>
      <p>
        {text} <span>{value} </span>
      </p>
    </>
  );
};

const StatisticLine = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No Feedback Given</p>;
  } else {
    return (
      <>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="Total" value={total} />
        <Statistic text="Average" value={average} />
        <Statistic text="Positive" value={positive} />
      </>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const average = total
    ? (good * 1 + neutral * 0 + bad * -1).toFixed(1) / total
    : 0;
  const positive = total ? `${(good / total) * 100}%` : "0%";

  return (
    <div>
      <Header />

      <button
        className="btn"
        onClick={() => setGood((prevalue) => prevalue + 1)}
      >
        good
      </button>
      <button
        className="btn"
        onClick={() => setNeutral((prevalue) => prevalue + 1)}
      >
        {" "}
        neutral
      </button>
      <button
        className="btn"
        onClick={() => setBad((prevalue) => prevalue + 1)}
      >
        bad
      </button>

      <h3>Statistic</h3>

      <StatisticLine
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
