import {
    Container,
    Paper,
    Typography,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Grid,
} from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import logo from "../../assests/logo/budgie logo.png";
import manWithPhone from "../../assests/logo/man with phone.png";
import { TypeAnimation } from "react-type-animation";

const LoginPage: React.FC = () => {
    const [textColor, setTextColor] = useState("green");
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        // Color changes every 4 seconds
        const colors = ["#22C55E", "hsl(219,100%,50%)", "hsl(14,100%,60%)"];

        const colorInterval = setInterval(() => {
            setTextColor(colors[sequenceIndex]);
            setSequenceIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 4000); // 4 seconds for color change

        return () => clearInterval(colorInterval);
    }, [sequenceIndex]);

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log("Employee ID:", employeeId);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
    };

    return (
        <Fragment>
            <div
                style={{
                    width: "95%",
                    margin: "auto",
                }}
            >
                <header style={{ marginTop: "20px"}} >
                    <img src={logo} alt="logo" />
                </header>
                <Container style={{ marginTop: "80px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {/* Typography Section */}
                        <div style={{ flex: "1 1 50%", padding: "20px", justifyContent: "center", alignItems: "center", background: "lightgreen" }}>
                            <Typography variant="h3" component={"h1"}>
                                <span style={{ color: "black" }}>Manage Your </span>
                                <span style={{ color: textColor }}>
                                    <TypeAnimation
                                        preRenderFirstString={true}
                                        wrapper="span"
                                        sequence={[
                                            "Time.", // Show 'Time'
                                            3000, // Duration for 'Time'
                                            "", // Simulate slow clear
                                            2000, // Duration for clearing
                                            "Work.", // Show 'Work'
                                            3000, // Duration for 'Work'
                                            "", // Simulate slow clear
                                            2000, // Duration for clearing
                                            "Effort.", // Show 'Effort'
                                            3000, // Duration for 'Effort'
                                            "", // Simulate slow clear
                                            2000, // Duration for clearing
                                        ]}
                                        speed={20} // Fixed typing speed
                                        repeat={Infinity}
                                        style={{ display: "inline" }}
                                    />
                                </span>
                            </Typography>
                            <Typography variant="h5">
                                Unlock your productivity with Budgie
                            </Typography>
                        </div>

                        {/* Image and Form Section */}
                        <div
                            style={{
                                flex: "1 1 50%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "20px",
                                background: "lightblue"
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

                            <Paper
                                elevation={3}
                                style={{ padding: "20px", width: "100%", maxWidth: "400px", background: "LIGHTYELLOW" }}
                            >
                                <form onSubmit={handleLogin}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField


                                                fullWidth
                                                value={employeeId}
                                                onChange={(e) => setEmployeeId(e.target.value)}
                                                required
                                                InputLabelProps={{
                                                    shrink: false,

                                                }}

                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField

                                                type="password"
                                                variant="outlined"
                                                fullWidth
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                InputLabelProps={{
                                                    shrink: false,
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
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
                                    </Grid>
                                </form>
                            </Paper>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default LoginPage;
