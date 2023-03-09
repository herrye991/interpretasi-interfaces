import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import GoogleButton from 'react-google-button';
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
    action: {
      disabledBackground: "",
      disabled: "white",
    }
  },
});

export default function Register() {
  let [open, setOpen] = React.useState(false);
  let [loading, setLoading] = React.useState(false);

  React.useEffect(async () => {
    const session = await API.session();
    if (session == 200) {
      window.location.href = ENV.baseURL('account/dashboard')
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = { email: data.get('email') };
    setLoading(true);
    const signup = await API.signup(body);
    if (signup.data.code == 200) {
      setLoading(false);
      setOpen(true);
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
            REGISTRASI
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <GoogleButton onClick={() => { console.log('Google button clicked') }} label="Daftar dengan Google" style={{ width: "100%" }} />
            <Divider sx={{ marginTop: 2 }}>ATAU</Divider>
            <TextField
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Alamat Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Collapse sx={{ mb: 2 }} in={open}>
              <Alert action={
                  <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }>
                Email verifikasi terkirim!
              </Alert>
            </Collapse>
            <Typography variant="body2">
              {"Dengan mendaftar, Saya setuju dengan "}
              <Link href={ENV.baseURL('account/term_and_condition')} variant="body2">Syarat dan Ketentuan</Link>{" Dan "}<Link href={ENV.baseURL('account/privacy_policy')} variant="body2">Kebijakan Privasi</Link>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? (<CircularProgress sx={{ color: "#ffffff" }}/>) : "Daftar"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href={ENV.baseURL('account/forgot')} variant="body2">
                  Lupa Sandi?
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {"Sudah punya akun? "}
                  <Link href={ENV.baseURL('account/signup')} variant="body2">
                    {"Masuk"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}