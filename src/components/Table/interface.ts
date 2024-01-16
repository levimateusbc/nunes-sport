export interface DataType {
    name: string;
    description: string;
    price: number;
    productCode: string;
  }

export interface CustomTableProps{
    data?: DataType[];
}