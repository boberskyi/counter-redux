import styled from "styled-components";
import {bgColor, mainColor} from "../App/AppStyles";

interface StyledBtnCounterType {
    is_active: boolean
}

export const StyledBtnCounter = styled.button<StyledBtnCounterType>`
  padding: 10px 20px;
  font-size: 40px;
  font-weight: bold;
  color: ${mainColor};
  background-color: ${bgColor};
  border: none;
  border-radius: 5px;
  opacity: ${props => props.is_active ? '0.5' : '1'};
  cursor: ${props => props.is_active ? 'not-allowed' : 'pointer'};
`