import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, getAuthToken, isUserLogged } from "./components/Context/authContext";


const userLogged = {
    getToken: () => getAuthToken(),
    isUserLogged: () => isUserLogged()
}

ReactDOM.render(
    <AuthProvider value={ userLogged }>
        <BrowserRouter basename="/techChallengePractice">
            <App />
        </BrowserRouter>
    </AuthProvider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

