import React from 'react';
import styled from "styled-components";

type BtnCounterType = {
    children: string
    callback: () => void
    active?: boolean | undefined
}
export const BtnCounter: React.FC<BtnCounterType> = ({children, callback, ...props}) => {
    const onBtnClick = () => callback();
    return (
        <StyledBtnCounter disabled={props.active}
                          not_active={props.active ? "true" : undefined}
                          onClick={onBtnClick}>
            {children}
        </StyledBtnCounter>
    );
};

interface StyledBtnCounterType {
    not_active?: string | undefined
}

const StyledBtnCounter = styled.button<StyledBtnCounterType>`
  padding: 10px 20px;
  font-size: 40px;
  font-weight: bold;
  color: #34333e;
  background-color: #71dffd;
  border: none;
  border-radius: 5px;
  opacity: ${props => props.not_active ? '0.5' : '1'};
  cursor: ${props => props.not_active ? 'not-allowed' : 'pointer'};
`