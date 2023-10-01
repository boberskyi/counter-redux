import React, {useEffect} from 'react';
import '../../App.css';
import {RightCounterFrame} from "../RightCounterFrame/RightCounterFrame";
import {LeftCounterFrame} from "../LeftCounterFrame/LeftCounterFrame";
import {useDispatch} from "react-redux";
import {StyledApp} from "./AppStyles";
import {setMaxValueAC, setMinValueAC, setStartValueAC} from "../../redux/actions/actions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedStartValue = Number(localStorage.getItem('startValue'));
        const storedMinValue = Number(localStorage.getItem('minValue'));
        const storedMaxValue = Number(localStorage.getItem('maxValue'));

        storedStartValue && dispatch(setStartValueAC(storedStartValue));
        storedMinValue && dispatch(setMinValueAC(storedMinValue));
        storedMaxValue && dispatch(setMaxValueAC(storedMaxValue));
    }, []);


    return (
        <StyledApp className="App">
            <LeftCounterFrame/>
            <RightCounterFrame/>
        </StyledApp>
    );
}

export default App;
