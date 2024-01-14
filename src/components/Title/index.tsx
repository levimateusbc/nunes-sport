import { TitleProps } from "./interface";
import * as S from "./styles";

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <S.Container>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.SubtitleContainer>{subtitle}</S.SubtitleContainer>
    </S.Container>
  );
}
