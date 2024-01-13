import { Input, Typography } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
width: 360px;
display: flex;
flex-direction: column;
gap: 0.5rem;

@media screen  and (max-width: 360px){
    width: 100%;
}
`;

export const InputCustomer = styled(Input)`
border-radius: 4px;
`;

export const Label = styled(Typography)`
font-style: normal;
font-weight: 300;
`;