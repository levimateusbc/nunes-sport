import { InputCustomerProps } from './interface';
import * as S from './styles';

export default function InputDefault({placeholder, label,count,defaultValue, type}:InputCustomerProps){
    return(
        <S.Container>
        <S.Label>{label}</S.Label>
        <S.InputCustomer
        placeholder={placeholder}
        defaultValue={defaultValue}
        count={count}
        type={type}
        />
        </S.Container>
    )
}