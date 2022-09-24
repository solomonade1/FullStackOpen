import { useState } from "react";
import "./unicafe.css";

// Header text
const Header = ({ headerText }) => {
  return <h2>{headerText}</h2>;
};

// The Statistic Body
const Statistic = ({ text, value }) => {
  return (
    <>
      <tr>
        <th>{text}</th>
        <td>{value} </td>
      </tr>
    </>
  );
};
// Individual Statistic body line
const StatisticLine = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No Feedback Given</p>;
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Total" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </tbody>
      </table>
    );
  }
};

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Total number of feedback
  const total = good + neutral + bad;

  // Averagenumber of feedback
  const average = total
    ? (good * 1 + neutral * 0 + bad * -1).toFixed(1) / total
    : 0;

  // Percentage of positive feedback
  const positive = total ? `${(good / total) * 100}${" "}%` : "0%";

  return (
    <div>
      <Header headerText="give Statistic" />

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

      <Header headerText="statistics" />

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

export default Unicafe;
