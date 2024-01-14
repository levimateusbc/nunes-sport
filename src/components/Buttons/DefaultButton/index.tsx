import { DefaultButtonProps } from "./interface";
import * as S from "./styles";

export default function DefaultButton({
  type,
  label,
  htmlType,
  width,
  onClick,
}: DefaultButtonProps) {
  function handleOnClick() {
    if (onClick) onClick();
  }

  return (
    <>
      <S.DefaultButton
        type={type}
        htmlType={htmlType}
        style={{ width: width ? width : "100%" }}
        onClick={() => handleOnClick()}
      >
        {label}
      </S.DefaultButton>
    </>
  );
}
