import { UserOutlined } from "@ant-design/icons";
import { DropdownCustomProps } from "./interface";
import * as S from "./styles";

export default function DropdownCustom({ items }: DropdownCustomProps) {
  return (
    <S.DropdownCustomer menu={{ items }}>
      <UserOutlined style={{fontSize: "24px", color: "#140063"}} onClick={(e) => e.preventDefault()}/>
    </S.DropdownCustomer>
  );
}
