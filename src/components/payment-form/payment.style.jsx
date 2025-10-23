import styled from "styled-components";
import Button from "../Botton/button.compoent";
export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.form`
    height: 140px;
    min-width: 500px;

             @media only screen and (max-width: 700px) {
        & {
    min-width: auto;
    }
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 15px;
`