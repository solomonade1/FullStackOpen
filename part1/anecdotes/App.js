import { useState, useEffect } from "react";

const Anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
];

const Header = ({ headerText }) => {
  return <h1>{headerText}</h1>;
};

const AnecdotesBody = ({ anecdotes, voteNo }) => {
  return (
    <>
      <p>{anecdotes}</p>
      <p>has {voteNo} of votes</p>
    </>
  );
};

const App = () => {
  const initialVotes = Array(Anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);
  const [highestVote, setHighestVote] = useState(0);

  //get random number
  const getRandomNumber = () => {
    return Math.floor(Math.random() * Anecdotes.length);
  };

  const handleClick = () => {
    let randomNumber = getRandomNumber();

    while (randomNumber === selected) {
      randomNumber = getRandomNumber;
    }
    setSelected(randomNumber);
  };

  const handleVote = () => {
    // values of all previous vote
    let updatedVotes = [...votes];

    //casting of vote
    updatedVotes[selected]++;
    setVotes(updatedVotes);
  };

  useEffect(() => {
    // index of anecdotes that has highest number of votes
    const anecdotesHighestVoteIndex = votes.indexOf(Math.max(...votes));

    // If the index anecdotes that has highest number of votes  equal present, do nothing.
    if (votes[Anecdotes] <= votes[highestVote]) {
      return;
    }

    setHighestVote(anecdotesHighestVoteIndex);
  }, [votes, highestVote]);

  return (
    <div>
      <Header headerText="Anecdotes of the day" />

      <AnecdotesBody anecdotes={Anecdotes[selected]} voteNo={votes[selected]} />

      <button onClick={handleClick}>next Anecdotes</button>

      <button onClick={handleVote}>Vote</button>
      <Header headerText="Anecdotes with highest vote" />
      {votes[highestVote] === 0 ? (
        <h1>No Vote Casted</h1>
      ) : (
        <div>
          <p>{Anecdotes[highestVote]}</p>
          <p>has {votes[highestVote]} </p>
        </div>
      )}
    </div>
  );
};

export default App;
