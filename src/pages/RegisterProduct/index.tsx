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
import * as S from "./styles";

export default function RegisterProduct({ pageId }: RegisterProductProps) {

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
    navigate("/")
    
  }

  return (
    <DefaultLayoutAdmin>
      <Title title={handleTitlePage()} subtitle={handleSubtitlePage()} />
      <S.FormContent
        name={"register-product"}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete={"off"}
      >
        <S.InputContainer>
          <Form.Item
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <InputDefault
              label={"Nome do produto"}
              placeholder={"digite aqui"}
              count={{ max: 40, show: true }}
            />
          </Form.Item>
          <Form.Item
            rules={[
              { required: false, message: "Please input your password!" },
            ]}
          >
            <InputDefault
              label={"Código do produto"}
              placeholder={"Digite aqui"}
              type={"number"}
              count={{ max: 5, show: true }}
            />
          </Form.Item>
          <Form.Item
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
        <Form.Item>
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
              width={"150px"}
              onClick={()=> handleCancel()}
            />
          </Form.Item>
          <Form.Item>
            <DefaultButton
              type={"primary"}
              htmlType={"submit"}
              label={"Cadastrar"}
              width={"150px"}
            />
          </Form.Item>
        </S.Footer>
      </S.FormContent>
    </DefaultLayoutAdmin>
  );
}
