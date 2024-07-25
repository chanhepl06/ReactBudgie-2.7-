import React, { Fragment } from "react";
import {
    Card,
    Container,
    Grid,
    Stack,
    Box,
    Divider,
    Avatar
} from "@mui/material";
import { styled } from '@mui/material/styles';
import MicrosoftImage from "@assets/logo/Microsoft_Office_Outlook.png";
import TeamsImage from "@assets/logo/Microsoft_Office.png";
import OnedriveImage from "@assets/logo/Microsoft_OneDrive.png";
import YammerImage from "@assets/logo/Microsoft_Office_Yammer.png";
import AddIcon from '@mui/icons-material/Add';
import GirlImage from "@assets/logo/Girl.png";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const DashboardPage: React.FC = () => {
    return (
        <Fragment>
            <Container sx={{ flexGrow: 1, marginTop: "50px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <Stack direction="row" spacing={2} padding={2} alignItems="center">
                                <img src={MicrosoftImage} alt="Item 1" style={{ width: '20px', height: '20px' }} />
                                <img src={TeamsImage} alt="Item 2" style={{ width: '20px', height: '20px' }} />
                                <img src={OnedriveImage} alt="Item 3" style={{ width: '20px', height: '20px' }} />
                                <img src={YammerImage} alt="Item 4" style={{ width: '20px', height: '20px' }} />
                                <AddIcon />
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card>
                            <Stack direction="row" spacing={2} padding={2} alignItems="center">
                                <h2 style={{ height: "25px" }}>TO Do</h2>
                                <Divider orientation="vertical" flexItem />
                                <img src={GirlImage} alt="Item 4" style={{ width: '25px', height: '25px' }} />
                                <p>Great news! your to-do list is wide open and ready for action.</p>

                                <p style={{ color: "orange" }}> Add</p>



                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={4} >
                        <Card sx={{ height: "100%" }}>
                            <Stack direction="row" spacing={2} padding={2} alignItems="center">
                                <Avatar sx={{ bgcolor: '#FFF5F1' }}>
                                    <EventAvailableIcon sx={{ color: '#FF6534' }} />
                                </Avatar>
                                <h2>Attendance<br></br>   <span style={{ fontSize: "12px", color: "gray" }}>Mar 25 -Apr 24</span></h2>
                            </Stack>
                            <Divider flexItem />
                            <Box margin={2} display="flex" justifyContent="space-between">
                                <p style={{ marginRight: '20px' }}><span style={{ color: "blue" }}>1 Gap</span> in attendance</p>
                                <p style={{ color: "#FF6534" }}>Apply Regularisation</p>
                            </Box>
                        </Card>


                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ height: "100%" }}>
                            <Stack direction="row" spacing={2} padding={2} alignItems="center">
                                <Avatar sx={{ bgcolor: '#FFF5F1' }}>
                                    <EventAvailableIcon sx={{ color: '#FF6534' }} />
                                </Avatar>
                                <h2>Leave<br></br> <span style={{ fontSize: "12px", color: "gray" }}>Mar 25 -Apr 24</span></h2>




                            </Stack>
                            <Divider flexItem />
                            <Box margin={2} display="flex" justifyContent="space-between">
                                <p style={{ marginRight: '20px' }}><span style={{ color: "blue" }}>1 Gap</span> in attendance</p>
                                <p style={{ color: "#FF6534" }}>Apply leave</p>
                            </Box>
                        </Card>

                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ height: "100%" }}>
                            <Stack direction="row" spacing={2} padding={2} alignItems="center">
                                <Avatar sx={{ bgcolor: '#FFF5F1' }}>
                                    <EventAvailableIcon sx={{ color: '#FF6534' }} />
                                </Avatar>
                                <h2>Payslip<br></br> <span style={{ fontSize: "12px", color: "gray" }}>Mar 25 -Apr 24</span></h2>
                            </Stack>
                            <Divider flexItem />
                            <Box margin={2} display="flex" justifyContent="space-between">
                                <p style={{ marginRight: '20px' }}><span style={{ color: "blue" }}>1 Gap</span> in attendance</p>
                                <p style={{ color: "#FF6534" }}>Download</p>
                            </Box>
                        </Card>

                    </Grid>



                </Grid>
            </Container>
        </Fragment>
    );
};

export default DashboardPage;
