import React from "react";
import { CoursePart } from "../../index";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <ul>
          <h3>{part.name}</h3>
          <li>Exercise count: {part.exerciseCount}</li>
          <li>Description: {part.description}</li>
        </ul>
      );
    case "Using props to pass data":
      return (
        <ul>
          <h3>{part.name}</h3>
          <li>Exercise count: {part.exerciseCount}</li>
          <li>Group project count: {part.groupProjectCount}</li>
        </ul>
      );
    case "Deeper type usage":
      return (
        <ul>
          <h3>{part.name}</h3>
          <li>Exercise count: {part.exerciseCount}</li>
          <li>Description: {part.description}</li>
          <li>Exercise submission link: {part.exerciseSubmissionLink}</li>
        </ul>
      );
    case "Custom Part":
      return (
        <ul>
          <h3>{part.name}</h3>
          <li>Exercise count: {part.exerciseCount}</li>
          <li>Description: {part.description}</li>
          <li>Course period: {part.period}</li>
        </ul>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
