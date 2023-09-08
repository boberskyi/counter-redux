import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, storeType} from "../../redux/store";
import {setMaxValueAC} from "../../redux/counter-reducer";

type InputCounterType = {
    error: boolean,
    changeInputVal: () => void
}
export const InputMaxCounter:React.FC<InputCounterType> = ({error, ...props}) => {
    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, storeType>(store => store.counter);
    const onInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeInputVal();
        dispatch(setMaxValueAC(Number(e.currentTarget.value)));
    }

    return (
        <StyledSettingsInput value={counter.maxValue} min={counter.startValue} onChange={onInputChange} type='number' error={error ? 'true' : undefined}/>
    );
};

interface StyledSettingsInputType {
    error: string | undefined
}

const StyledSettingsInput = styled.input<StyledSettingsInputType>`
  padding: 10px; 
  text-align: center;
  border: 1px solid #71dffd;
  border-radius: 5px;
  font-weight: bold;
  
  background: ${props => props.error ? 'rgba(255,0,0,.4)' : '#fff'};
  color: ${props => props.error ? '#fff' : '#000'};
  
  &:focus {
    outline-color: #71dffd;
  }
`