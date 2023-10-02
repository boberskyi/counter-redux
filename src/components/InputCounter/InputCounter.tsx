import React, {ChangeEvent, useState} from 'react';
import {StyledSettingsInput, StyledSettingsLabel, StyledSettingsRow} from "./InputCounterStyles";

type InputCounterPropsType = {
    callback: (text:string) => void
    value: string
    error: string | undefined
    text: string
    min?: number
    max?: number
}
export const InputCounter: React.FC<InputCounterPropsType> = ({...props}) => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => props.callback(e.currentTarget.value);


    return (
        <StyledSettingsRow>
            <StyledSettingsLabel>
                {props.text}
                <StyledSettingsInput value={props.value}
                                     min={props.min}
                                     max={props.max}
                                     onChange={onChangeInput}
                                     type='number'
                                     error={props.error}/>
            </StyledSettingsLabel>
        </StyledSettingsRow>
    )
};