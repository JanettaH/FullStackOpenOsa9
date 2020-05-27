import React from "react";
import Header from "./components/course/Header";
import Total from "./components/course/Total";
import Content from "./components/course/Content";
import { CoursePart } from "./index";

const App = () => {
  const header = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    },
    {
      name: "Custom Part",
      exerciseCount: 11,
      description: "Custom part description",
      period: 4,
    },
  ];

  return (
    <div>
      <Header courseName={header} />
      <Content courseParts={courseParts} />
      <Total
        total={courseParts.reduce(
          (carry, part) => carry + part.exerciseCount,
          0
        )}
      />
    </div>
  );
};

export default App;
