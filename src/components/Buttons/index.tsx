import { CustomButtonProps } from "./interface";
import * as S from  "./styles";

export default function CustomButton({type, label, htmlType}:CustomButtonProps){
    return(
        <>
        <S.CustomButton
        type={type}
        htmlType={htmlType}
        >
            {label}
        </S.CustomButton>
        </>
    )
}