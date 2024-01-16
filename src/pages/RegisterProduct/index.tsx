import { Form } from "antd/lib";
import {
  DefaultButton,
  DefaultLayoutAdmin,
  InputDefault,
  TextAreaCustom,
  Title,
} from "../../components";
import { RegisterProductProps } from "./interface";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createProduct } from "../../Services/api";
import { useScreenSize } from "../../Utils";
import { message } from "antd";
import * as S from "./styles";

export default function RegisterProduct({ pageId }: RegisterProductProps) {
  const [productDescription, setProductDescription] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();

  const screenSize = useScreenSize();

  const navigate = useNavigate();
  function handleTitlePage(): string {
    if (!pageId) {
      return "Cadastro de Produto";
    } else {
      return "Edição de Produto";
    }
  }

  function handleSubtitlePage(): string {
    if (!pageId) {
      return "Adicione novos itens à sua loja com facilidade. Preencha um simples formulário para incluir informações essenciais e torne seu produto disponível instantaneamente.";
    } else {
      return "Atualize detalhes rapidamente. Acesse o formulário pré-preenchido, ajuste as informações necessárias e salve as alterações para manter seus produtos sempre atualizados.";
    }
  }

  function handleCancel(): void {
    navigate("/");
  }

  const handleSave = async (values: any) => {
    messageApi.open({
      type: "success",
      content: "Produto cadastrado com sucesso!",
    });
    await createProduct({
      description: values.description,
      name: values.name,
      productCode: Number(values.productCode),
      price: Number(values.price),
    });
  };

  return (
    <DefaultLayoutAdmin>
      {contextHolder}
      <Title title={handleTitlePage()} subtitle={handleSubtitlePage()} />
      <S.FormContent
        name={"register-product"}
        initialValues={{ remember: true }}
        onFinish={handleSave}
        autoComplete={"off"}
      >
        <S.InputContainer>
          <Form.Item name={"productCode"} rules={[{ required: false }]}>
            <InputDefault
              label={"Código do produto"}
              placeholder={"Digite aqui"}
              type={"number"}
              count={{ max: 5, show: true }}
            />
          </Form.Item>
          <Form.Item
            name={"name"}
            rules={[
              {
                required: true,
                message: "Campo obrigatório. Preencha por favor!",
              },
            ]}
          >
            <InputDefault
              label={"Nome do produto"}
              placeholder={"digite aqui"}
              count={{ max: 40, show: true }}
              value={productDescription}
              onChange={(e: any) => setProductDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name={"price"}
            rules={[
              { required: false, message: "Please input your password!" },
            ]}
          >
            <InputDefault
              label={"Valor"}
              placeholder={"Digite aqui"}
              type={"number"}
            />
          </Form.Item>
        </S.InputContainer>
        <Form.Item
          name={"description"}
          rules={[{ required: false, message: "Please input your password!" }]}
        >
          <TextAreaCustom
            placeholder={"Digite aqui"}
            label={"Descrição"}
            autoSize={{ minRows: 2, maxRows: 5 }}
            count={{ max: 500, show: true }}
          />
        </Form.Item>
        <S.Footer>
          <Form.Item>
            <DefaultButton
              type={"dashed"}
              htmlType={"reset"}
              label={"Cancelar"}
              width={screenSize === "mobile" ? "100%" : "150px"}
              onClick={() => handleCancel()}
            />
          </Form.Item>
          <Form.Item>
            <DefaultButton
              type={"primary"}
              htmlType={"submit"}
              label={"Cadastrar"}
              width={screenSize === "mobile" ? "100%" : "150px"}
            />
          </Form.Item>
        </S.Footer>
      </S.FormContent>
    </DefaultLayoutAdmin>
  );
}
