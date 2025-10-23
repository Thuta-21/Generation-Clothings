import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

        @media only screen and (max-width: 700px) {
        & {
  width: 100%;
    }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }

          @media only screen and (max-width: 700px) {
        & {
  width: 50%;
  font-size: 12px;
    }

  
`;

export const CheckoutTotal = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

          @media only screen and (max-width: 700px) {
        & {
  font-size: 25px;
    }
`;