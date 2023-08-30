import React from 'react';
import './App.css';
import styled from "styled-components";
import {CounterFrame} from "./components/CounterFrame/CounterFrame";

const App = () => {
    return (
        <StyledApp className="App">
            <CounterFrame/>
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
`

export default App;
