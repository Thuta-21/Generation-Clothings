import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  

  @media only screen and (max-width: 700px) {
    & {
      overflow: scroll;
    }
`;

export const Previewtitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: left;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media only screen and (max-width: 700px) {
    & {
      min-width: 1100px;
      display: flex;
  }
`;
