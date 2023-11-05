import React, {useState} from 'react';
import {storeType} from "../../redux/store";
import {BtnCounter} from "../BtnCounter/BtnCounter";
import {
    StyledLeftControls,
    StyledLeftCounterFrame,
    StyledSettings
} from "./LeftCounterFrameStyles";
import {InputCounter} from "../InputCounter/InputCounter";
import {setValuesAC, setValuesTC} from "../../redux/actions/actions";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

export const LeftCounterFrame: React.FC = () => {
    const dispatch = useAppDispatch();

    const counterStartValue = useAppSelector<number | undefined>(store => store.counter.startValue);
    const counterMinValue = useAppSelector<number | undefined>(store => store.counter.minValue);
    const counterMaxValue = useAppSelector<number | undefined>(store => store.counter.maxValue);

    if (counterStartValue === undefined || counterMinValue === undefined || counterMaxValue === undefined) {
        throw new Error('One or more values are undefined');
    }

    const [activeBtn, setActiveBtn] = useState(false);
    const onBtnSetClick = () => {
        const obj:storeType = {
            startValue: counterStartValue,
            minValue: counterMinValue,
            maxValue: counterMaxValue
        };

        setActiveBtn(true);
        dispatch(setValuesTC(obj));
    }
    const disableActiveBtn = () => setActiveBtn(false);

    const onMinInputChange = (text:string) => {
        disableActiveBtn();
        dispatch(setValuesAC({
            minValue: +text,
            startValue: +text
        }));
    }
    const onMaxInputChange = (text:string) => {
        disableActiveBtn();
        dispatch(setValuesAC({maxValue: +text}))
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