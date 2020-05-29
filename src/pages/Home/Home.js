import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

import * as S from "./styled";

function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [ erro, setErro ] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories')
    }).catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input name="usuario" id="usuario" value={usuario} className="usuarioInput" placeholder="Ususario" onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        { erro ?  <S.ErrorMessage>Usuário não encontrado</S.ErrorMessage> : ''}
      </S.Content>
    </S.HomeContainer>
    
  );
}

export default Home;
