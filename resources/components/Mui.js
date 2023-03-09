import React from 'react';
import ReactDOM from 'react-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import EmailVerified from './auth/EmailVerified';
import ResetPassword from './auth/ResetPassword';

if (document.getElementById('signin')) {
    ReactDOM.render(<Login />, document.getElementById('signin'));
}

if (document.getElementById('signup')) {
    ReactDOM.render(<Register />, document.getElementById('signup'));
}

if (document.getElementById('email-verified')) {
    ReactDOM.render(<EmailVerified />, document.getElementById('email-verified'));
}

if (document.getElementById('reset-password')) {
    ReactDOM.render(<ResetPassword />, document.getElementById('reset-password'));
}