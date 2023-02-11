import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function EmailVerified() {
    let [responseData, setResponseData] = React.useState('')
    const requestOptions = {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
    };
    
    useEffect(() => {
        axios(window.location.href, requestOptions)
        .then((response) => {
            setResponseData(response.data)
        })
        .catch((error) => {
            console.log(error)
        });
        setTimeout(() => {
            window.location.replace('https://interpretasi.id');
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);
    
    var icon = <AccessTimeOutlinedIcon />
    var message = 'Checking...';
    if (responseData.id == null) {
        icon = <DangerousOutlinedIcon />
        message = 'Token expired!';
    } else {
        icon = <VerifiedUserOutlinedIcon />
        message = 'Your account has been verified!';
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {icon}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {message}
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default EmailVerified

if (document.getElementById('email-verified')) {
    ReactDOM.render(<EmailVerified />, document.getElementById('email-verified'));
}