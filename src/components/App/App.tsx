import React, {useEffect} from 'react';
import '../../App.css';
import {RightCounterFrame} from "../RightCounterFrame/RightCounterFrame";
import {LeftCounterFrame} from "../LeftCounterFrame/LeftCounterFrame";
import {StyledApp} from "./AppStyles";
import {useDispatch} from "react-redux";
import {setValuesAC} from "../../redux/actions/actions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const valuesObs = localStorage.getItem('counterValues');

        valuesObs && dispatch(setValuesAC(JSON.parse(valuesObs)))
    }, []);

    return (
        <StyledApp className="App">
            <LeftCounterFrame/>
            <RightCounterFrame/>
        </StyledApp>
    );
}

export default App;
