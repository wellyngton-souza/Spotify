import React from "react";
import imgthiaguinho from '../../assets/thiaguinho.jpg';
import imganitta from '../../assets/anitta.jpg';
import coldplay from '../../assets/coldplay.jpg';
import { Box } from "./style";

function BoxMusic() {
  return (
    <Box>
      <h1>Boa tarde</h1>
      <div className="container-flex">
        <div className="musicadia">
          <img src={imgthiaguinho} />
          <a>Thiaginho so pra amanha</a>
        </div>
      </div>
      <h2>Nome da Musica</h2>
      <div className="container-flex">
        <div className="music-box"><img src={imgthiaguinho} /><h2>Thiaguinho</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imgthiaguinho} /><h2>Thiaguinho</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imgthiaguinho} /><h2>Thiaguinho</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imgthiaguinho} /><h2>Thiaguinho</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imgthiaguinho} /><h2>Thiaguinho</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imgthiaguinho} /><h2>Thiaguinho</h2>pahwdpoihwad</div>
      </div>
      <h2>lajdwpjwapdjaw</h2>
      <div className="container-flex">
        <div className="music-box"><img src={imganitta} /><h2>anitta</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imganitta} /><h2>anitta</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imganitta} /><h2>anitta</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imganitta} /><h2>anitta</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imganitta} /><h2>anitta</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={imganitta} /><h2>anitta</h2>pahwdpoihwad</div>
      </div>
      <h2>lajdwpjwapdjaw</h2>
      <div className="container-flex">
        <div className="music-box"><img src={coldplay} /><h2>coldplay</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={coldplay} /><h2>coldplay</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={coldplay} /><h2>coldplay</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={coldplay} /><h2>coldplay</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={coldplay} /><h2>coldplay</h2>pahwdpoihwad</div>
        <div className="music-box"><img src={coldplay} /><h2>coldplay</h2>pahwdpoihwad</div>
      </div>
    </Box>
  );
}

export default BoxMusic;