import React from "react";
import { CoursePart } from "../../index";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div>
      {props.courseParts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
