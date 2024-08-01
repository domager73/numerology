import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {initStore} from "./Store/Store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={initStore}>
        <BrowserRouter>
            <Routes>
                {/* подстановочный путь */}
                <Route path="*" element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
