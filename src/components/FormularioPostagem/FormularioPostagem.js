import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";
import { useState } from "react";

export const FormularioCadastro = (props) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo"/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" />
        </StyledLabel>
        
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
