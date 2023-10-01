import styled from "styled-components";
import {bgColor, errorColor, mainColor} from "../App/AppStyles";

export const StyledRightCounterFrame = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${bgColor};
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
interface StyledBtnCounterType {
    error?: boolean
    error_txt?: boolean
}
export const StyledDial = styled.input<StyledBtnCounterType>`
  color: ${props => props.error ? errorColor : bgColor};
  background-color: ${mainColor};
  width: 100%;
  pointer-events: none;
  border-radius: 5px;
  padding: 35px;
  font-size: ${props => props.error_txt ? '18px' : '100px'};
  font-weight: bold;
  text-align: center;
  border: 2px solid ${bgColor};
  user-select: none;
`