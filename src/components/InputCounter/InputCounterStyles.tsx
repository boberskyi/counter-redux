import styled from "styled-components";
import {bgColor} from "../App/AppStyles";

export const StyledSettingsRow = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledSettingsLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`
interface StyledSettingsInputType {
    error: string | undefined
}

export const StyledSettingsInput = styled.input<StyledSettingsInputType>`
  padding: 10px;
  text-align: center;
  border: 1px solid ${bgColor};
  border-radius: 5px;
  font-weight: bold;
  width: 180px;

  background: ${props => props.error ? 'rgba(255,0,0,.4)' : '#fff'};
  color: ${props => props.error ? '#fff' : '#000'};

  &:focus {
    outline-color: ${bgColor};
  }
`