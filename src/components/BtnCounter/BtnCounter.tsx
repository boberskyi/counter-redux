import React from 'react';
import {StyledBtnCounter} from "./BtnCounterStyles";

type BtnCounterType = {
    children: string
    callback: () => void
    is_active?: boolean | undefined
}
export const BtnCounter: React.FC<BtnCounterType> = ({children, callback, ...props}) => {
    const onBtnClick = () => callback();
    return (
        <StyledBtnCounter disabled={props.is_active}
                          is_active={!!props.is_active}
                          onClick={onBtnClick}>
            {children}
        </StyledBtnCounter>
    );
};