export interface TextAreaCustomProps {
  placeholder: string;
  label: string;
  defaultValue?: string | number | readonly string[] | undefined;
  count?: {
    max: number;
    show: boolean;
  };
  autoSize?: boolean | { minRows: number, maxRows: number };
}
