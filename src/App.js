import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [usuario, setUsuario] = useState("")
  const [imagem, setImagem] = useState("")
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [pageFlow, setPageFlow] = useState(1);
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
          usuario={usuario}
          imagem={imagem}
          />
          {pageFlow === 1 ? (
            <FormularioLogin 
            usuario={usuario}
            imagem={imagem}

            setUsuario={setUsuario}
            setImagem={setImagem}
            setPageFlow={setPageFlow}
            />
          ) : (
            <FormularioPostagem 
            imagem={imagem}
            titulo={titulo}
            descricao={descricao}

            setImagem={setImagem}
            setTitulo={setTitulo}
            setDescricao={setDescricao}
            />
          )}
        </aside>
        <TelaDaPostagem 
        usuario={usuario}
        imagem={imagem}

        setUsuario={setUsuario}
        setImagem={setImagem}
        />
      </Container>
    </>
  );
}

export default App;
