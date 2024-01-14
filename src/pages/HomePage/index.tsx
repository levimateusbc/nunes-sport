import { Card } from "antd";
import {
  CustomButton,
  CustomTable,
  DefaultLayoutAdmin,
  Title,
} from "../../components";
import Search, { SearchProps } from "antd/es/input/Search";
import * as S from "./styles";
import { useScreenSize } from "../../Utils";

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
          <Search
            placeholder={"Busque por produtos"}
            onSearch={onSearch}
            style={{ width: "70%" }}
          />
          {screenSize === "mobile" ? (
            <p>mobile</p>
          ) : (
            <div>
              <CustomButton
                label={"Adicionar Produto"}
                htmlType={"button"}
                type={"primary"}
                width={"192px"}
              />
            </div>
          )}
        </S.TableInnerContainer>
          <CustomTable />
      </S.TableContainer>
    </DefaultLayoutAdmin>
  );
}
