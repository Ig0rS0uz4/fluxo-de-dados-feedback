import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader></TitleHeader>
      <Image  />
      <Description></Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
