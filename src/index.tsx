import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {StyleSheetManager} from "styled-components";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'is_active'
        && prop !== 'error'
        && prop !== 'error_txt'
    }>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </StyleSheetManager>
);

reportWebVitals();