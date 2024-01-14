import { Form } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const FormContent = styled(Form)`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;
  gap: 1rem;
`;
