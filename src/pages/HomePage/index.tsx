import { Card } from "antd";
import {
  DefaultButton,
  CustomTable,
  DefaultLayoutAdmin,
  Title,
  IconButton,
} from "../../components";
import Search, { SearchProps } from "antd/es/input/Search";
import { useScreenSize } from "../../Utils";
import * as S from "./styles";
import { PlusOutlined } from "@ant-design/icons";

export default function HomePage() {
  const screenSize = useScreenSize();

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <DefaultLayoutAdmin>
      <Title
        title={"Seja bem-vindo(a), Gestor(a)"}
        subtitle={
          "Explore as Possibilidades - Sua Central de Controle para Dados e Insights"
        }
      />
      <S.CardsContainer>
        <Card title="Vendedores" bordered={false}>
          Gerenciador de Produtos
        </Card>
        <Card title="Gerenciador de Vendas" bordered={false}>
          Gerenciador de Vendas
        </Card>
        <Card title="Gerenciador de Compras" bordered={false}>
          Gerenciador de Compras
        </Card>
        <Card title="Gerenciador de Compras" bordered={false}>
          Gerenciador de Compras
        </Card>
      </S.CardsContainer>
      <S.TableContainer>
        <S.TableInnerContainer>
          {screenSize === "mobile" ? (
            <IconButton>
              <PlusOutlined />
            </IconButton>
          ) : (
            <DefaultButton
              label={"Adicionar Produto"}
              htmlType={"button"}
              type={"primary"}
              width={"150px"}
            />
          )}
        </S.TableInnerContainer>
        <CustomTable />
      </S.TableContainer>
    </DefaultLayoutAdmin>
  );
}
