import { Form } from "antd";
import { InputDefault, DefaultButton } from "../../components";
import * as S from "./styles";

export default function Login() {
  return (
    <S.Container>
      <S.Content>
        <S.TextContent>
          <S.Title>Bem-vindo de volta, gestor esportivo!</S.Title>
        </S.TextContent>
        <S.FormContent
          name={"login"}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete={"off"}
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <InputDefault label={"E-mail"} placeholder={"email@email.com"} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <InputDefault
              label={"Senha"}
              placeholder={"Informe sua senha"}
              type={"password"}
            />
          </Form.Item>
          <Form.Item>
            <DefaultButton
              type={"primary"}
              htmlType={"submit"}
              label={"Entrar"}
            />
          </Form.Item>
        </S.FormContent>
      </S.Content>
    </S.Container>
  );
}
