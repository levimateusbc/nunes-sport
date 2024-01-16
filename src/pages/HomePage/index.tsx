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
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDadosDaAPI } from "../../Services/api";
import * as S from "./styles";
import { DataType } from "../../components/Table/interface";

export default function HomePage() {
  const screenSize = useScreenSize();
  const navigate = useNavigate();

  function handleNavigateToRegisterProduct(): void {
    navigate("/register-product");
  }

  const [dados, setDados] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosDaAPI = await getDadosDaAPI();
        // setDados(dadosDaAPI?.result);
        setDados(dadosDaAPI.result)
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };
    fetchData();
  }, []);

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
        <CustomTable data={dados} />
      </S.TableContainer>
    </DefaultLayoutAdmin>
  );
}
