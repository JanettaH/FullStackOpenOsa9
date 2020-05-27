import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface WithdDescription {
  description: string;
}

interface CustomPart extends CoursePartBase, WithdDescription {
  name: "Custom Part";
  period: number;
}

interface CoursePartOne extends CoursePartBase, WithdDescription {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase, WithdDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

export type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CustomPart;

const FrontPage: React.FC = () => {
  return <App />;
};

ReactDOM.render(<FrontPage />, document.getElementById("root"));
