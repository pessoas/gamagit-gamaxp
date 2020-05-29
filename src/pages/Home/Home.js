import React, {useState} from 'react';
import axios from "axios";

import * as S from "./styled";

function Home() {
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <S.Container>
      <S.Input name="usuario" id="usuario" value={usuario} className="usuarioInput" placeholder="Ususario" onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default Home;
