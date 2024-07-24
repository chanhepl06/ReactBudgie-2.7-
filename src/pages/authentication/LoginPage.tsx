import React, { Fragment, useState, useEffect } from "react";
import {
    Container,
    Paper,
    Typography,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Grid,
    InputAdornment,
    Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "@assets/logo/budgie-logo.png";
import MicrosoftLogo from "@assets/logo/Microsoft logo.png";
import manWithPhone from "@assets/logo/man-with-phone.png";
import { TypeAnimation } from "react-type-animation";
import LockIcon from '@mui/icons-material/Lock';

// Define styles using makeStyles
const useStyles = makeStyles({
    textFieldRoot: {
        backgroundColor: 'hsl(15,100%,69%, 0.1)', // Default background color
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'none', // No border initially
            },
            '&:hover fieldset': {
                borderColor: 'hsl(15,100%,69%)', // Border color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: 'hsl(15,100%,69%)', // Border color when focused
            },
            '&.Mui-focused': {
                backgroundColor: 'hsl(15,100%,69%, 0.1)', // Background color when focused
            },
            borderRadius: '5px',
        },
        '& .MuiInputBase-root': {
            '&:hover': {
                backgroundColor: 'hsl(15,100%,69%, 0.05)', // Background color on hover
            },
            '&.Mui-focused': {
                backgroundColor: 'hsl(15,100%,69%, 0.1)', // Background color when focused
            },
        },
        '& .MuiInputBase-input': {
            '&:focus': {
                backgroundColor: 'hsl(15,100%,69%, 0.1)', // Background color inside the input when focused
            },
        },
    }
});

const LoginPage: React.FC = () => {
    const classes = useStyles();
    const [textColor, setTextColor] = useState("green");
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const colors = ["#22C55E", "hsl(219,100%,50%)", "hsl(14,100%,60%)"];
        const colorInterval = setInterval(() => {
            setTextColor(colors[sequenceIndex]);
            setSequenceIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 4000); // 4 seconds for color change

        return () => clearInterval(colorInterval);
    }, [sequenceIndex]);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            console.log("Employee ID:", employeeId);
            console.log("Password:", password);
            console.log("Remember Me:", rememberMe);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <Fragment>
            <div style={{ width: "95%", margin: "auto" }}>
                <header style={{ marginTop: "20px" }}>
                    <img src={logo} alt="logo" />
                </header>
                <Container style={{ marginTop: "80px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div
                            style={{
                                flex: "flex",
                                width: "50%",
                                padding: "20px",
                                justifyContent: "center",
                                alignItems: "center",
                                // background: "lightgreen",
                            }}
                        >
                            <Typography variant="h3" component={"h1"}>
                                <span style={{ color: "black" }}>Manage Your </span>
                                <span style={{ color: textColor }}>
                                    <TypeAnimation
                                        preRenderFirstString={true}
                                        wrapper="span"
                                        sequence={[
                                            "Time.", 3000, "", 2000,
                                            "Work.", 3000, "", 2000,
                                            "Effort.", 3000, "", 2000,
                                        ]}
                                        speed={20}
                                        repeat={Infinity}
                                        style={{ display: "inline" }}
                                    />
                                </span>
                            </Typography>
                            <Typography variant="h5">
                                Unlock your productivity with Budgie
                            </Typography>
                        </div>

                        <div
                            style={{
                             
                                alignItems: "center",
                                padding: "20px",
                                // background: "lightblue"
                            }}
                        >
                            <img
                                src={manWithPhone}
                                alt="Man with phone"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    marginBottom: "20px",
                                }}
                            />
                        </div>
                        <Paper
                            // elevation={3}
                            style={{
                                padding: "20px",
                                width: "100%",
                                maxWidth: "400px",
                                // background: "lightyellow",
                                margin: "20px auto"
                            }}
                        >
                            <form onSubmit={handleLogin}>
                                <Typography variant="h5">Login</Typography>
                                <Typography variant="body1">Welcome back! let's get started</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>Employee ID</Typography>
                                        <TextField
                                            fullWidth
                                            value={employeeId}
                                            onChange={(e) => setEmployeeId(e.target.value)}
                                            required
                                            autoComplete="off" // Turn off autocomplete for security
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className={classes.textFieldRoot}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Password</Typography>
                                        <TextField
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            autoComplete="new-password" // Use "new-password" for password fields
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <LockIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            className={classes.textFieldRoot}
                                        />
                                    </Grid>
                                    <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={rememberMe}
                                                    onChange={(e) => setRememberMe(e.target.checked)}
                                                    color="primary"
                                                />
                                            }
                                            label="Remember Me"
                                        />
                                        <Typography
                                            component="a"
                                            href="#"
                                            variant="body2"
                                            sx={{
                                                textDecoration: "none",
                                                color: "primary.main",
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                },
                                            }}
                                        >
                                            Forgot Password?
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "hsl(14,100%,60%)",
                                                border: "1px solid hsl(14,100%,60%)",
                                                color: "white",
                                                "&:hover": {
                                                    backgroundColor: "hsl(14,100%,50%)",
                                                    border: "1px solid hsl(14,100%,50%)",
                                                },
                                            }}
                                            fullWidth
                                        >
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="center" variant="body2" sx={{ mt: 2, mb: 2 }}>
                                            or
                                        </Typography>
                                        <Button
                                            sx={{
                                                fontFamily: "Roboto",
                                                fontSize: "12px",
                                                fontWeight: 600,
                                                lineHeight: "24px",
                                                textAlign: "left",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "4px",
                                                border: "1px solid #E0E0E0",
                                                color: "black",
                                                textTransform: "none",
                                                width: "100%",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={MicrosoftLogo}
                                                alt="Microsoft Logo"
                                                sx={{
                                                    marginRight: "8px",
                                                    width: { xs: "20px", md: "24px" },
                                                    height: { xs: "20px", md: "24px" },
                                                }}
                                            />
                                            Sign in with Microsoft
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </div>

                </Container>
            </div>
        </Fragment>
    );
};

export default LoginPage;
