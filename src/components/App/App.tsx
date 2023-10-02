import React from 'react';
import '../../App.css';
import {RightCounterFrame} from "../RightCounterFrame/RightCounterFrame";
import {LeftCounterFrame} from "../LeftCounterFrame/LeftCounterFrame";
import {StyledApp} from "./AppStyles";

const App = () => {
    return (
        <StyledApp className="App">
            <LeftCounterFrame/>
            <RightCounterFrame/>
        </StyledApp>
    );
}

export default App;
