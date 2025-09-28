import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  top:0;
  z-index:5;
  background-color: rgba(255,255,255, 0.9);

    @media only screen and (max-width: 700px) {
        & {
        width: 105%;
        
    }
`;

export const NavLogo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;

export const NavLinksContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
`;
