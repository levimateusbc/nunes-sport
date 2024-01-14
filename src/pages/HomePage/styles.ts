import styled from "styled-components";

export const Container = styled.div``;

export const CardsContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TableContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TableInnerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
