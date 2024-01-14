import { TextAreaCustomProps } from "./interface";
import * as S from "./styles";

export default function TextAreaCustom({
  placeholder,
  label,
  count,
  defaultValue,
}: TextAreaCustomProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputCustomer
        placeholder={placeholder}
        defaultValue={defaultValue}
        count={count}
      />
    </S.Container>
  );
}
