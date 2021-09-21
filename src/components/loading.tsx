import React from "react";
import { LoadingCSS } from "./styles";

const Loading: React.FC = () => {
  return (
    <LoadingCSS
      style={{ height: document.documentElement.scrollHeight }}
      id="LoadingPage"
      className="cortina"
    >
      {/* <div className="carrega"><img src={Logo}  alt="Carregando" /></div> */}
      <div id="load">
        <div className="circle"></div>
      </div>
    </LoadingCSS>
  );
}

export default Loading;