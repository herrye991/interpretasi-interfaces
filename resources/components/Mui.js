import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './auth/SignIn';
import EmailVerified from './auth/EmailVerified';
import ResetPassword from './auth/ResetPassword';

if (document.getElementById('signin')) {
    ReactDOM.render(<SignIn />, document.getElementById('signin'));
}

if (document.getElementById('email-verified')) {
    ReactDOM.render(<EmailVerified />, document.getElementById('email-verified'));
}

if (document.getElementById('reset-password')) {
    ReactDOM.render(<ResetPassword />, document.getElementById('reset-password'));
}