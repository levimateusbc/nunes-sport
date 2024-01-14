import { InputCustomerProps } from "./interface";
import * as S from "./styles";

export default function InputDefault({ ...props }: InputCustomerProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event);
    console.log(event.target.value);
  };

  return (
    <S.Container>
      <S.Label>{props.label}</S.Label>
      <S.InputCustomer
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        count={props.count}
        type={props.type}
        value={props.value}
        onChange={handleChange}
      />
    </S.Container>
  );
}
