import React from "react";
import { Nav } from "./style";
import imgspotify from '../../assets/Spotfy.svg';

function NavSimple() {
  return (
    <Nav>
        <img src={imgspotify} height="60px" />
    </Nav>
  );
}

export default NavSimple;
