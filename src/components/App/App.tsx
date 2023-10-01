import React, {useEffect} from 'react';
import './App.css';
import styled from "styled-components";
import {RightCounterFrame} from "./components/RightCounterFrame/RightCounterFrame";
import {LeftCounterFrame} from "./components/LeftCounterFrame/LeftCounterFrame";
import {useDispatch} from "react-redux";
import {setMaxValueAC, setMinValueAC, setStartValueAC} from "./redux/counter-reducer";

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


const StyledApp = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34333e;
  gap: 150px;
`

export default App;
