import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogin, ButtonFacebook, ButtonApple, ButtonDefault, CenterConteudo, SpaceConteudo } from "./style";

function CLogin() {
  return (
    <SpaceConteudo>
      <CenterConteudo>
        <ButtonFacebook>CONTINUE WITH FACEBOOK</ButtonFacebook>
        <ButtonApple>CONTINUE WITH APPLE</ButtonApple>
        <ButtonDefault>CONTINUE WITH GOOGLE</ButtonDefault>
        <ButtonDefault>CONTINUE WITH PHONE NUMBER</ButtonDefault>
        <p>OR</p>
        <div>
          <p>Email address or username</p>
          <input type="text" placeholder="Email addres or username" />
          <p>Password</p>
          <input type="text" placeholder="Password" />
          <p>Forgot your password?</p>
          <label htmlFor="Remember"><input type="checkbox" id="Remember" />Remember me</label>
          <Link to='/home'><ButtonLogin>LOG IN</ButtonLogin></Link>
        </div>
        <hr />
        <h2>Don´t have an account?</h2>
        <Link to='/cadastro'><ButtonDefault>SIGN FOR SPOTIFY</ButtonDefault></Link>
      </CenterConteudo>
    </SpaceConteudo>
  );
}

export default CLogin;
