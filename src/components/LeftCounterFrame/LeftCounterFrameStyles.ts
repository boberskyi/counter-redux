import styled from "styled-components";
import {bgColor, mainColor} from "../App/AppStyles";

export const StyledLeftCounterFrame = styled.div`
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
export const StyledSettings = styled.div`
  color: ${bgColor};
  background-color: ${mainColor};
  width: 100%;
  border-radius: 5px;
  padding: 35px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  border: 2px solid ${bgColor};
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledLeftControls = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 2px solid ${bgColor};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`