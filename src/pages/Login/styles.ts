import { Form, Typography } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
height: 100vh; 
background-image: url("https://images.unsplash.com/photo-1484482340112-e1e2682b4856?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
background-size: cover; 
background-position: center;
`;

export const Content = styled.div`
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:5rem;
`;

export const FormContent = styled(Form)`
background: #fff;
border-radius: 8px;
padding: 1rem;
`;

export const TextContent = styled.div`
width: 40%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 960px) {
    display: none;
}
`;

export const Title = styled(Typography)`
font-size: 50px;
color: #fff;
font-weight: 800;
padding-bottom: 8rem;
`