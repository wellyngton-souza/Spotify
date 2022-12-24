import styled from "styled-components";

export const Box = styled.div`
    width: 100%;
    max-height: 90vh;

    display: flex;
    flex-direction: column;
    overflow:auto;
    overflow-x: hidden;
    background-color: #0F0F0F;
    padding: 0 10px;
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

    .container-flex{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .music-box{
        display: flex;
        flex-direction: column;
        background-color: #181818;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }

    .container-flex img{
        width: 200px;
        height: 200px;
        border-radius: 3px;
    }

    .musicadia{
        display: flex;
        align-items: center;
        width: 500px;
        background-color: #202020;
    }

    .musicadia img{
        width: 70px;
        height: 70px;
    }
}
`;