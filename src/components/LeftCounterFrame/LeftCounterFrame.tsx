import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {BtnCounter} from "../BtnCounter/BtnCounter";
import {
    StyledLeftControls,
    StyledLeftCounterFrame,
    StyledSettings
} from "./LeftCounterFrameStyles";
import {InputCounter} from "../InputCounter/InputCounter";

export const LeftCounterFrame: React.FC = () => {
    const counterStartValue = useSelector<AppRootStateType, number>(store => store.counter.startValue);
    const counterMinValue = useSelector<AppRootStateType, number>(store => store.counter.minValue);
    const counterMaxValue = useSelector<AppRootStateType, number>(store => store.counter.maxValue);

    const [activeBtn, setActiveBtn] = useState(false);
    const onBtnSetClick = () => {
        setActiveBtn(true);
        localStorage.setItem('startValue', counterStartValue.toString());
        localStorage.setItem('minValue', counterMinValue.toString());
        localStorage.setItem('maxValue', counterMaxValue.toString());
    }
    const disableActiveBtn = () => setActiveBtn(false);

    return (
        <StyledLeftCounterFrame>
            <StyledSettings>
                <InputCounter disableActiveBtn={disableActiveBtn} name={'max'}/>
                <InputCounter disableActiveBtn={disableActiveBtn} name={'min'}/>
            </StyledSettings>

            <StyledLeftControls>
                <BtnCounter callback={onBtnSetClick} is_active={activeBtn}>
                    set
                </BtnCounter>
            </StyledLeftControls>
        </StyledLeftCounterFrame>
    );
};