import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {BtnCounter} from "../BtnCounter/BtnCounter";
import {
    StyledLeftControls,
    StyledLeftCounterFrame,
    StyledSettings
} from "./LeftCounterFrameStyles";
import {InputCounter} from "../InputCounter/InputCounter";
import {setMaxValueAC, setMinValueAC, setStartValueAC} from "../../redux/actions/actions";

export const LeftCounterFrame: React.FC = () => {
    const dispatch = useDispatch();

    const counterStartValue = useSelector<AppRootStateType, number>(store => store.counter.startValue);
    const counterMinValue = useSelector<AppRootStateType, number>(store => store.counter.minValue);
    const counterMaxValue = useSelector<AppRootStateType, number>(store => store.counter.maxValue);

    const [activeBtn, setActiveBtn] = useState(false);
    const onBtnSetClick = () => {
        setActiveBtn(true);
        localStorage.setItem('startValue', JSON.stringify(counterStartValue));
        localStorage.setItem('minValue', JSON.stringify(counterMinValue));
        localStorage.setItem('maxValue', JSON.stringify(counterMaxValue));
    }
    const disableActiveBtn = () => setActiveBtn(false);

    const onMinInputChange = (text:string) => {
        disableActiveBtn();
        dispatch(setMinValueAC(Number(text)));
        dispatch(setStartValueAC(Number(text)));
    }
    const onMaxInputChange = (text:string) => {
        disableActiveBtn();
        dispatch(setMaxValueAC(Number(text)));
    }


    return (
        <StyledLeftCounterFrame>
            <StyledSettings>
                <InputCounter callback={onMaxInputChange}
                              value={counterMaxValue.toString()}
                              text={'max value: '}
                              min={counterMinValue}
                              error={counterStartValue >= counterMaxValue ? 'true' : undefined}
                />
                <InputCounter callback={onMinInputChange}
                              value={counterMinValue.toString()}
                              text={'start value: '}
                              min={0}
                              max={counterMaxValue}
                              error={counterStartValue >= counterMaxValue ? 'true' : undefined}
                />
            </StyledSettings>

            <StyledLeftControls>
                <BtnCounter callback={onBtnSetClick} is_active={activeBtn}>
                    set
                </BtnCounter>
            </StyledLeftControls>
        </StyledLeftCounterFrame>
    );
};