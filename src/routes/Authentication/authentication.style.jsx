import styled from "styled-components";


export const AuthContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 1100px;
    margin: 15px auto;
    background-color: whitesmoke;
    box-shadow: 0 20px 30px  rgba(0, 0, 0, 0.3);
    padding: 50px 10px;
    border-radius: 15px;

    
      @media only screen and (max-width: 700px) {
        & {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        padding: 0;
        box-shadow: 0 20px 30px  rgba(255, 255, 255, 0.3);
        background-color: white;
    }
`;