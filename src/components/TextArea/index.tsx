import { TextAreaCustomProps } from "./interface";
import * as S from "./styles";

export default function TextAreaCustom({ ...props }: TextAreaCustomProps) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        onChange={handleChange}
      />
    </S.Container>
  );
}
