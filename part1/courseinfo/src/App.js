const Header = ({ course }) => {
  return <h1>{course} </h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ name, exercises }, i) => (
        <Part key={i} name={name} exercises={exercises} />
      ))}
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Total = ({ course }) => {
  const total = course.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <p>Total number of courses is {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />

      <Total course={course.parts} />
    </div>
  );
};

export default App;
