import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
  };
  function onChangeUsuario(event){
    props.setUsuario(event.target.value)
  }
  function onChangeImagem(event){
    props.setImagem(event.target.value)
  }
  
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.usuario} onChange={onChangeUsuario} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.Imagem} onChange={onChangeImagem}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
