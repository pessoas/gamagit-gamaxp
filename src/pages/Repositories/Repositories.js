import React, { useState, useEffect } from "react";

import * as S from './styled'

function Repositories () {

  const [ repositories, setRepositories ] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    localStorage.clear();
  }, []);
  return (
    <S.Container>
      <S.Title>Repositories</S.Title>
      <S.List>
        { repositories.map((repository) => {
          return (
          <S.ListItem key={repository} >Repositório: { repository }</S.ListItem>
          )
        })}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}

export default Repositories;