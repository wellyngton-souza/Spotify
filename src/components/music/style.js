import styled from "styled-components";

export const Box = styled.div`
    width: 100%;
    max-height: 90vh;

    display: flex;
    flex-direction: column;
    overflow:auto;
    background-color: #0F0F0F;

    color: white;

    ::-webkit-scrollbar {
        width: 16px;
    }
    
    ::-webkit-scrollbar-track {
    background: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #0a0a0a;
    border-radius: 10px;
    border: 3px solid #ffffff;
    }
`;