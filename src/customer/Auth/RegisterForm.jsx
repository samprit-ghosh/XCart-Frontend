import { useEffect } from 'react';
import { TextField, Grid, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, getUser } from './../../State/Auth/Action';
import CloseIcon from '@mui/icons-material/Close';


function RegisterForm({ onClose = () => {} }) {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const jwt = localStorage.getItem("jwt");
    // const { auth } = useSelector(store => store);

    // useEffect(() => {
    //     if (jwt) {
    //         dispatch(getUser(jwt));
    //     }
    // }, [jwt, auth.jwt, dispatch]);

    // const formRegister = (event) => {
    //     event.preventDefault(); // Prevent default form submission

    //     const data = new FormData(event.currentTarget);
    //     const usersData = {
    //         firstName: data.get("firstName"),
    //         lastName: data.get("lastName"),
    //         email: data.get("email"),
    //         password: data.get("password"),
    //     };

    //     dispatch(register(usersData));

    //     console.log(`${usersData.firstName} ${usersData.lastName}\n${usersData.email}\n${usersData.password}`);
    // };

    const handleClose = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log("Close button clicked"); // Debugging
        onClose(); // Call the onClose function safely
    };

    return (
        <Container maxWidth="sm" sx={{ padding: { xs: 2, sm: 3 }, marginTop: 4 }}>
            <form onSubmit={formRegister}>
                {/* Close Button */}
                <CloseIcon
                    type="button" // Ensure it doesn't submit the form
                    onClick={handleClose}
                    style={{ position: 'absolute', top: 30, right: 30 }}
                />
                   

                <Grid container spacing={3}>
                    {/* First Name Field */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>

                    {/* Last Name Field */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>

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
                            autoComplete="new-password"
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
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {/* Login Prompt */}
            <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 3 }}>
                <Typography variant="body1" sx={{ marginRight: 1 }} color="#213547">
                    If you have an account?
                </Typography>
                <Button
                    onClick={() => navigate("/login")}
                    size="small"
                    sx={{ color: '#9155FD', fontWeight: 'bold' }}
                >
                    Login
                </Button>
            </Grid>
        </Container>
    );
}

export default RegisterForm;
