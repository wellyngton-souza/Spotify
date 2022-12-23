import React from "react";
import { PadMargin } from "./style"
import CLogin from "../../components/Login/index";
import NavSimple from "../../components/nav-bar-Simple/index";

function Login() {
  return (
    <PadMargin>
      <NavSimple />
      <CLogin />
    </PadMargin>
  );
}

export default Login;