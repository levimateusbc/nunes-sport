import { CustomButtonProps } from "./interface";
import * as S from  "./styles";

export default function CustomButton({type, label, htmlType, width}:CustomButtonProps){
    return(
        <>
        <S.CustomButton
        type={type}
        htmlType={htmlType}
        style={{width: width ? width : "100%"}}
        >
            {label}
        </S.CustomButton>
        </>
    )
}