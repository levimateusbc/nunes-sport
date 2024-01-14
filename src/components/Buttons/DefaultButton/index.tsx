import { DefaultButtonProps } from "./interface";
import * as S from  "./styles";

export default function DefaultButton({type, label, htmlType, width}:DefaultButtonProps){
    return(
        <>
        <S.DefaultButton
        type={type}
        htmlType={htmlType}
        style={{width: width ? width : "100%"}}
        >
            {label}
        </S.DefaultButton>
        </>
    )
}