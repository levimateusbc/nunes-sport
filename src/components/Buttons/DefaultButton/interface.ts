export interface DefaultButtonProps {
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  label: string;
  htmlType?: "submit" | "button" | "reset";
  width?: string;
  onClick?: () => void;
}
