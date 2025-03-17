import { TextField, Grid, Button, Container, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onClose = () => {} }) {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const usersData = {
            email: data.get("email"),
            password: data.get("password"),
        };

        console.log(`Email: ${usersData.email}\nPassword: ${usersData.password}`);
    };

    const handleClose = (event) => {
        event.preventDefault();
        console.log("Close button clicked");
        onClose(); // Trigger modal close
    };

    return (
        <Container maxWidth="sm" sx={{ padding: { xs: 2, sm: 3 }, marginTop: 4, position: 'relative' }}>
            <form onSubmit={handleLogin}>
                {/* Close Icon */}
                <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', top: -40, right: 3 }}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>

                <Grid container spacing={3}>
                    {/* Email Field */}
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                            type="email"
                        />
                    </Grid>

                    {/* Password Field */}
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="current-password"
                            type="password"
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                padding: "0.8rem 0",
                                width: "100%",
                                backgroundColor: "#9155FD",
                                '&:hover': { backgroundColor: '#7E4BD7' },
                            }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {/* Register Prompt */}
            <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 3 }}>
                <Typography variant="body1" sx={{ marginRight: 1 }} color='#213547'>
                    If you do not have an account?
                </Typography>
                <Button
                    onClick={() => navigate("/register")}
                    size="small"
                    sx={{ color: '#9155FD', fontWeight: 'bold' }}
                >
                    Register
                </Button>
            </Grid>
        </Container>
    );
}

export default LoginForm;
