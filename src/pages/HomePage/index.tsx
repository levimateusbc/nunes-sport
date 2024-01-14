import { Card } from "antd";
import {
  DefaultButton,
  CustomTable,
  DefaultLayoutAdmin,
  Title,
  IconButton,
} from "../../components";
import { useScreenSize } from "../../Utils";
import { PlusOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const screenSize = useScreenSize();
  const navigate = useNavigate();

  function handleNavigateToRegisterProduct(): void {
    navigate("/register-product");
  }

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
            <IconButton onClick={() => handleNavigateToRegisterProduct()}>
              <PlusOutlined />
            </IconButton>
          ) : (
            <DefaultButton
              label={"Adicionar Produto"}
              htmlType={"button"}
              type={"primary"}
              width={"150px"}
              onClick={() => handleNavigateToRegisterProduct()}
            />
          )}
        </S.TableInnerContainer>
        <CustomTable />
      </S.TableContainer>
    </DefaultLayoutAdmin>
  );
}
