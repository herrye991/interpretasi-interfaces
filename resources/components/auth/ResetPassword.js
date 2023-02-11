import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import Copyright from './includes/Copyright';

const theme = createTheme();

function ResetPassword() {
    var icon = <AccessTimeOutlinedIcon />
    var message = 'Memuat...';
    var currentURL = String(window.location.href);
    var token;
    let [responseData, setResponseData] = React.useState('')
    const requestOptions = {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
    };

    useEffect(() => {
        axios(window.location.href, requestOptions)
            .then((response) => {
                setResponseData(response.data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);
    if (responseData.validity == true) {
        icon = <LockOutlinedIcon />
        message = 'Masukkan Kata Sandi Baru'
        token = responseData.token
    } else {
        icon = <DangerousOutlinedIcon />
        message = 'Token kadaluarsa!'
        token = null
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {icon}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {message}
                    </Typography>
                    {token !== null &&
                        <Box component="form" action={`${currentURL}`} method="POST" sx={{ mt: 1 }}>
                            <TextField
                                name="_token"
                                type="hidden"
                                defaultValue={`${token}`}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Kata Sandi"
                                type="password"
                                inputProps={{ minLength: 6 }}
                                name="password"
                                autoComplete="current-password"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password_confirmation"
                                label="Konfirmasi Kata Sandi"
                                type="password"
                                inputProps={{ minLength: 6 }}
                                id="password_confirmation"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Simpan
                            </Button>
                        </Box>
                    }
                </Box>
            </Container>
            <Copyright />
        </ThemeProvider>
    );
}

export default ResetPassword

if (document.getElementById('reset-password')) {
    ReactDOM.render(<ResetPassword />, document.getElementById('reset-password'));
}