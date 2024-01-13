import { Header } from "..";
import * as S from "./styles";

interface LayoutProps {
  children: any;
}
export default function DefaultLayoutAdmin({ children }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      <S.ChildrenContainer>{children}</S.ChildrenContainer>
      <S.FooterContainer>
        <span>Nunes Sport 2024 | powered by @levimateus</span>
      </S.FooterContainer>
    </S.Container>
  );
}
