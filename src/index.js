import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {initStore} from "./Store/Store";
import ThemeProvider from "./Сontexts/ThemeProvider";
import LoginScreen from "./Featuries/Login/LoginScreen";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Provider store={initStore}>
            <BrowserRouter>
                <Routes>
                    {/* подстановочный путь */}
                    <Route path="berba" element={<App/>}/>
                    <Route path="*" element={<LoginScreen/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
);

reportWebVitals();
