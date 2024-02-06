import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/index';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>  
        <GoogleOAuthProvider clientId="277714973136-1kr3ud6dcccu1s2jh47m3gb5k1k9sa16.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
);