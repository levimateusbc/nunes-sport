import { IconButtonProps } from "./interface";
import * as S from "./styles";

export default function IconButton({ children }: IconButtonProps) {
  return (
    <S.IconButtonContainer type={"primary"}>{children}</S.IconButtonContainer>
  );
}
