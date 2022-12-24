import styled from "styled-components";

export const SpaceConteudo = styled.div`
    width: 370px;
    height: 90vh;

    display: flex;
    flex-direction: column;
    background-color: black;
    user-select: none;

    a{
        display: flex;
        align-items: center;
    }

    .logotipo{
        padding: 20px 20px;
    }

    #inverte{
        filter: invert(100%);
    }

    .topicos{
        padding: 10px 20px;
        color: white;
    }
`;