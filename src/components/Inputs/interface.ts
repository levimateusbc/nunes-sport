export interface InputCustomerProps{

    placeholder: string;
    type?: "string" | "password" | "number" | "email";
    label: string;
    defaultValue?: string | number | readonly string[] | undefined;
    count?:{
        max: number,
        show: boolean
    }

}