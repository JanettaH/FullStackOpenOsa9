import React from "react";

interface HeaderProps {
  total: number;
}

const Total: React.FC<HeaderProps> = (props) => {
  return <h4>Number of exercises {props.total}</h4>;
};

export default Total;
