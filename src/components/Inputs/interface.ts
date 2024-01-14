import { valueType } from "antd/es/statistic/utils";

export interface InputCustomerProps {
  placeholder?: string | undefined;
  type?: "string" | "password" | "number" | "email";
  label: string;
  defaultValue?: string | number | readonly string[] | undefined;
  count?: {
    max: number;
    show: boolean;
  };
  value?: valueType;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
