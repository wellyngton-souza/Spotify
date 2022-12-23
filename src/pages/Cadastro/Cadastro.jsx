import React from "react";
import { PadMargin } from "./style";
import CCadastro from "../../components/Cadastro";
import NavSimple from "../../components/nav-bar-Simple/index";

function Cadastro() {
  return (
    <PadMargin>
      <NavSimple />
      <CCadastro />
    </PadMargin>
  );
}

export default Cadastro;