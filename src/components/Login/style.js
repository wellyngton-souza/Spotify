import styled from "styled-components";

export const SpaceConteudo = styled.div`
    display: flex;
    justify-content: center;
`;

export const CenterConteudo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 450px;

    button{
        margin: 6px 0;
        border-radius: 30px
    }

    div{
        text-align: left;
    }

    input[type=text]{
        width: 100%;
        height: 48px;
    }
`;

export const ButtonLogin = styled.button`
    background-color: green;
    padding: 13px;
    width: 100%;
`;

export const ButtonFacebook = styled.button`
    background-color: blue;
    color: white;
    padding: 13px;
`;

export const ButtonApple = styled.button`
    background-color: black;
    color: white;
    padding: 13px;
`;

export const ButtonDefault = styled.button`
    background-color: white;
    border: gray solid 1.8px;
    color: black;
    padding: 13px;
`;