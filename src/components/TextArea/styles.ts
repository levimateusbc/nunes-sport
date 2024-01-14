import { Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputCustomer = styled(TextArea)`
  border-radius: 4px;
`;

export const Label = styled(Typography)`
  font-style: normal;
  font-weight: 300;
`;
