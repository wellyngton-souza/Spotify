import React from "react";
import { BackgroundH, ConteinerConteudo } from "./style";
import BoxMusic from "../../components/music";
import Mediaplayer from "../../components/mediaplayer";
import BarraLateral from "../../components/BarraLateral";

function Home() {
  return (
    <BackgroundH>
      <ConteinerConteudo>
        <BarraLateral />
        <BoxMusic />
      </ConteinerConteudo>
      <Mediaplayer />
    </BackgroundH>
  );
}

export default Home;