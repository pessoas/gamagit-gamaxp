import React, {useState} from 'react';
import axios from "axios";

function Home() {
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <>
      <input name="usuario" id="usuario" value={usuario} className="usuarioInput" placeholder="Ususario" onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default Home;
