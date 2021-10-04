import React from "react";
import { FooterComponent } from "./styles";

type Props = {
  title: string;
}

export const Footer: React.FC<Props> = (props) => {
  return (
    <FooterComponent>
      <p>{props.title}</p>
    </FooterComponent>
  );
};
