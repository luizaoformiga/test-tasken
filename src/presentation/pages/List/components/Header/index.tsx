import React from "react";
import { HeaderComponent } from "./styles";

type Props = {
  title: string;
  subTitle: string;
};

export const Header: React.FC<Props> = (props) => {
  return (
    <HeaderComponent>
      <h2>{props.title}</h2>
      <h4>{props.subTitle}</h4>
    </HeaderComponent>
  );
};

