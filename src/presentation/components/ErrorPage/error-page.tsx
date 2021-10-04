import React from "react";

type Props = {
  title: string;
};

export const ErrorPage: React.FC<Props> = (props) => {
  return <h1>{props.title}</h1>;
};
