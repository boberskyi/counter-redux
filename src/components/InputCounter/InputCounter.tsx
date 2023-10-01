import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {StyledSettingsInput, StyledSettingsLabel, StyledSettingsRow} from "./InputCounterStyles";
import {setMaxValueAC, setMinValueAC, setStartValueAC} from "../../redux/actions/actions";

type InputCounterPropsType = {
    disableActiveBtn: () => void
    name: 'min' | 'max'
}
export const InputCounter: React.FC<InputCounterPropsType> = ({name, ...props}) => {
    const dispatch = useDispatch();
    const counterMaxValue = useSelector<AppRootStateType, number>(store => store.counter.maxValue);
    const counterStartValue = useSelector<AppRootStateType, number>(store => store.counter.startValue);

    const storedStartValue = Number(localStorage.getItem('startValue'));
    const [newMinVal, setNewMinVal] = useState(storedStartValue ? storedStartValue : counterStartValue);
    const onMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.disableActiveBtn();
        dispatch(setMinValueAC(Number(e.currentTarget.value)));
        dispatch(setStartValueAC(Number(e.currentTarget.value)));
        setNewMinVal(Number(e.currentTarget.value));
    }
    const onMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.disableActiveBtn();
        dispatch(setMaxValueAC(Number(e.currentTarget.value)));
    }

    switch (name) {
        case "max": return (
            <StyledSettingsRow>
                <StyledSettingsLabel>
                    max value:
                    <StyledSettingsInput value={counterMaxValue} min={counterStartValue} onChange={onMaxInputChange}
                                         type='number'
                                         error={counterStartValue >= counterMaxValue ? 'true' : undefined}/>
                </StyledSettingsLabel>
            </StyledSettingsRow>
            );
        case "min": return (
            <StyledSettingsRow>
                <StyledSettingsLabel>
                    start value:
                    <StyledSettingsInput value={newMinVal} min='0' max={counterMaxValue} onChange={onMinInputChange}
                                         type='number'
                                         error={counterStartValue >= counterMaxValue ? 'true' : undefined}/>
                </StyledSettingsLabel>
            </StyledSettingsRow>
            );
    }
};