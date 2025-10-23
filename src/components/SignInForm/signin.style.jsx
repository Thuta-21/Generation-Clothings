import styled from "styled-components";
import { BaseButton, GoogleButton } from "../Botton/button.style";

export const SigninContainer = styled.div`
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
        width: 100%;
        padding: 20px 10px 20px 10px;

            p {
        display: block;
    }
    }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInBtn = styled(BaseButton)`
      @media only screen and (max-width: 700px) {
        & {
  font-size: 0.6rem;
  min-width: 80px;
  width: auto;

    }

`;

export const SignInGoogleBtn = styled(GoogleButton)`
      @media only screen and (max-width: 700px) {
        & {
  font-size: 0.6rem;
  min-width: 70px;
  width: auto;

    }
`;
