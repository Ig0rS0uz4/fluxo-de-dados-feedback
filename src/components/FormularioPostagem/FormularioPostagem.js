import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  function onChangeTitulo(event){
    props.setTitulo(event.target.value)
  }
  function onChangeImagem(event){
    props.setImagem(event.target.value)
  }
  function onChangeDescricao(event){
    props.setDescricao(event.target.value)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange={onChangeTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={onChangeImagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
        
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
