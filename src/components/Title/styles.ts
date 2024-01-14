import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen  and (max-width: 600px){
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  font-size: 24px;
  font-weight: 600;
  @media screen  and (max-width: 600px){
    font-size: 18px;
  }
`;

export const SubtitleContainer = styled.div`
  font-size: 14px;
  @media screen  and (max-width: 600px){
    font-size: 12px;
  }
`;
