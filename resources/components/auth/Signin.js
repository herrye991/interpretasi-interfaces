import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ENV from '../helpers/ENV';
import API from '../helpers/API';
import Copyright from './includes/Copyright';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5541f8',
    },
    secondary: {
      main: '#5541f8',
    },
  },
});

export default function SignIn() {
  React.useEffect(async () => {
    const session = await API.session();
    if (session == 200) {
      window.location.href = ENV.baseURL('account/dashboard')
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      headers: { 'Accept': 'application/json' },
    };
    const data = new FormData(event.currentTarget);
    const body = {email: data.get('email'), password: data.get('password')};
    const auth = await API.signin(body);
    const queryParameters = new URLSearchParams(window.location.search)
    const next = queryParameters.get("next") ? queryParameters.get("next") : '';
    const comment = queryParameters.get("comment") ? queryParameters.get("comment") : '';
    if (auth == 200) {
      if (next !== '') {
        if (comment !== '') {
          window.location.href = next + '?comment=' + comment
        } else {
          window.location.href = next
        }
      } else {
        window.location.href = ENV.baseURL('account/dashboard')
      }
    } else {
      window.location.href = ENV.baseURL('account/signin')
    }
  };

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
          <Avatar sx={{ m: 1, bgcolor: 'transparent' }}>
            <img src={ENV.baseURL('assets/images/favicon.png')} style={{ maxWidth: "40px", maxHeight: "40px" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Alamat Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Kata Sandi"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ingat saya"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href={ENV.baseURL('account/forgot')} variant="body2">
                  Lupa Sandi?
                </Link>
              </Grid>
              <Grid item>
                <Link href={ENV.baseURL('account/signup')} variant="body2">
                  {"Tidak punya akun? Daftar Sekarang"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}