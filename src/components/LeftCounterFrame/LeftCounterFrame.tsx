import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType, storeType} from "../../redux/store";
import styled from "styled-components";
import {BtnCounter} from "../BtnCounter/BtnCounter";
import {InputMinCounter} from "../InputCounter/InputMinCounter";
import {InputMaxCounter} from "../InputCounter/InputMaxCounter";

export const LeftCounterFrame:React.FC = () => {
    const counter = useSelector<AppRootStateType, storeType>(store => store.counter);
// || counter.maxValue !== Number(localStorage.getItem('maxValue'))

    const [activeBtn, setActiveBtn] = useState(false);
    const onSetBtnClick = () => {
        setActiveBtn(true);
        localStorage.setItem('startValue', counter.startValue.toString());
        localStorage.setItem('minValue', counter.minValue.toString());
        localStorage.setItem('maxValue', counter.maxValue.toString());
    }

    const changeInputVal = () => {
        setActiveBtn(false);
    }

    return (
        <StyledLeftCounterFrame>
            <StyledSettings>

                <StyledSettingsRow>
                    <StyledSettingsLabel>
                        max value:
                        <InputMaxCounter changeInputVal={changeInputVal}/>
                    </StyledSettingsLabel>
                </StyledSettingsRow>

                <StyledSettingsRow>
                    <StyledSettingsLabel>
                        start value:
                        <InputMinCounter changeInputVal={changeInputVal}/>
                    </StyledSettingsLabel>
                </StyledSettingsRow>

            </StyledSettings>

            <StyledLeftControls>
                <BtnCounter callback={onSetBtnClick} active={activeBtn}>
                    set
                </BtnCounter>
            </StyledLeftControls>
        </StyledLeftCounterFrame>
    );
};

const StyledLeftCounterFrame = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #71dffd;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const StyledSettings = styled.div`
  color: #71dffd;
  background-color: #34333e;
  width: 100%;
  border-radius: 5px;
  padding: 35px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  border: 2px solid #71dffd;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const StyledSettingsRow = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledSettingsLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`
const StyledLeftControls = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 2px solid #71dffd;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`