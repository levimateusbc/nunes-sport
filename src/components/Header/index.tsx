import { MenuProps } from "antd";
import { Logo } from "../Icons";
import DropdownCustom from "../Dropdown";
import * as S from "./styles";

export default function Header() {
  const items: MenuProps["items"] = [
    {
      key: "4",
      danger: true,
      label: "Sair",
    },
  ];

  return (
    <S.Container>
      <S.FirstContent>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
      </S.FirstContent>
      <S.SecondaryContent>
        <DropdownCustom items={items} />
      </S.SecondaryContent>
    </S.Container>
  );
}
