import React from "react";
import { SpaceConteudo } from "./style";
import busca from '../../assets/busca_topo_icone.png';
import homeSpotify from "../../assets/spotifyHome.png";
import imgSpotify from '../../assets/Spotfy.svg';

function BarraLateral() {
  return (
    <SpaceConteudo>
      <a><img className="logotipo" id="inverte" src={imgSpotify} height="50px" /></a>
      <a className="topicos"><img src={homeSpotify} id="inverte" height="30px" width="30px" />Inicio</a>
      <a className="topicosN"><img src={busca} height="30px" width="30px" />Busca</a>
    </SpaceConteudo>
  );
}

export default BarraLateral;
