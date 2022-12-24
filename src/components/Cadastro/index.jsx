import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogin, ButtonFacebook, ButtonDefault, CenterConteudo, SpaceConteudo } from "./style";

function CCadastro() {
  return (
    <SpaceConteudo>
      <CenterConteudo>
        <ButtonFacebook>CONTINUE WITH FACEBOOK</ButtonFacebook>
        <ButtonDefault>CONTINUE WITH GOOGLE</ButtonDefault>
        <p>OR</p>
        <div>
          <p>Qual é o seu e-mail?</p>
          <input type="text" placeholder="Insira seu e-mail" />
          <p>Qual é o seu e-mail?</p>
          <input type="text" placeholder="Insira o e-mail novamente" />
          <p>Crie uma senha</p>
          <input type="password" placeholder="Crie uma senha" />
          <p>Como devemos chamar você?</p>
          <input type="text" placeholder="Insira um nome de perfil" />
          <hr />
          <p>Qual a sua data de nascimento?</p>
          <div className="flex">
            <div className="flex-column">
              Mes
              <select>
                <option>Mês</option>
                <option value="janeiro">janeiro</option>
                <option value="fevereiro">fevereiro</option>
                <option value="março">março</option>
                <option value="abril">abril</option>
                <option value="maio">maio</option>
                <option value="junho">junho</option>
                <option value="julho">julho</option>
                <option value="agosto">agosto</option>
                <option value="setembro">setembro</option>
                <option value="outubro">outubro</option>
                <option value="novembro">novembro</option>
                <option value="dezembro">dezembro</option>
              </select>
            </div>
            <div className="flex-column">
              Dia
              <input type="text" placeholder="DD" />
            </div>
            <div className="flex-column">
              Ano
              <input type="text" placeholder="AAAA" />
            </div>
          </div>
          <p>Qual é o seu gênero?</p>
          <label htmlFor="masculino"><input type="radio" id="masculino" name="genero" />Masculino</label>
          <label htmlFor="Feminino"><input type="radio" id="Feminino" name="genero" />Feminino</label>
          <label htmlFor="Não binario"><input type="radio" id="Não binario" name="genero" />Não binario</label>
          <label htmlFor="Outros"><input type="radio" id="Outros" name="genero" />Outros</label><br />
          <label htmlFor="Prefiro não dizer"><input type="radio" id="Prefiro não dizer" name="genero" />Prefiro não dizer</label>
          <hr />
          <label htmlFor="dados"><input type="checkbox" id="dados"/>Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de marketing.</label>
        </div>
        <p>Ao clicar para se inscrever, você concorda com os <a>Termos e Condições de Uso</a> do Spotify.</p>
        <p>Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados pessoais, leia a <a>Política de Privacidade do Spotify.</a></p>
        <center><Link to='/'><ButtonLogin>Inscrever-se</ButtonLogin></Link></center>
        <p>Já tem uma conta? <Link to='/'><a>Faça login.</a></Link></p>
      </CenterConteudo>
    </SpaceConteudo>
  );
}

export default CCadastro;
