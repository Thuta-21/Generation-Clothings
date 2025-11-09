import styled from "styled-components";

export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    p {
        display: none;
    }

      @media only screen and (max-width: 700px) {
        & {
        display: none;
        width: 100%;
        padding: 20px 10px 20px 10px;

           p {
        display: block;
    }
    }
`;
