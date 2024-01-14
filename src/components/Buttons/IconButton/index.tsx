import { IconButtonProps } from "./interface";
import * as S from "./styles";

export default function IconButton({ children, onClick }: IconButtonProps) {
  function handleOnClick(): void {
    if (onClick) onClick();
  }
  return (
    <S.IconButtonContainer type={"primary"} onClick={() => handleOnClick()}>
      {children}
    </S.IconButtonContainer>
  );
}
