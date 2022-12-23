import React from "react";
import { SpaceConteudo } from "./style";
import busca from '../../assets/busca_topo_icone.png';
import homeSpotify from "../../assets/spotifyHome.png";
import imgSpotify from '../../assets/Spotfy.svg';
import imgBiblioteca from '../../assets/biblioteca.png';
import imgPlaylist from '../../assets/playlist.png';
import imgMusica from '../../assets/musicacurtida.png';

function BarraLateral() {
  return (
    <SpaceConteudo>
      <a><img className="logotipo" id="inverte" src={imgSpotify} height="50px" /></a>
      <a className="topicos"><img src={homeSpotify} id="inverte" height="30px" width="30px" />Inicio</a>
      <a className="topicos"><img src={busca} height="30px" width="30px" />Busca</a>
      <a className="topicos"><img src={imgBiblioteca} id="inverte" height="30px" width="30px" />Sua Biblioteca</a>
      <p></p>
      <a className="topicos"><img src={imgPlaylist} id="inverte" height="30px" width="30px" />Criar playlist</a>
      <a className="topicos"><img src={imgMusica} id="inverte" height="30px" width="30px" />Músicas Curtidas</a>
      <hr />
      <a className="topicos">Só os tops</a>
    </SpaceConteudo>
  );
}

export default BarraLateral;