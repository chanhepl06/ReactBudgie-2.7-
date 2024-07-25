
import React, { Fragment, useState, useEffect } from "react";
import {
    Card,
    Container,

} from "@mui/material";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import MicrosoftImage from "@assets/logo/Microsoft_Office_Outlook.png";
import TeamsImage from "@assets/logo/Microsoft_Office.png";
import OnedriveImage from "@assets/logo/Microsoft_OneDrive.png";
import YammerImage from "@assets/logo/Microsoft_Office_Yammer.png";

const DashboardPage: React.FC = () => {




    return (
        <Fragment>
            <Container sx={{ flexGrow: 1, marginTop: "50px" }}>
                <Grid container spacing={2}>

                    <Grid  xs={4}>
                        <Card>
                            <Stack direction="row" spacing={2} padding={2}>
                                <img src={MicrosoftImage} alt="Item 1" style={{ width: '50px',height: '50px'  }} />
                                <img src={TeamsImage} alt="Item 2" style={{ width: '50px',height: '50px'  }}  />
                                <img src={OnedriveImage} alt="Item 3" style={{ width: '50px',height: '50px'  }}  />
                                <img src={YammerImage} alt="Item 3" style={{ width: '50px',height: '50px'  }}  />
                                
                                
                            
                            </Stack>
                        </Card>

                    </Grid>
                    <Grid item xs={8}>
                    
                    </Grid>
                </Grid>


            </Container>



        </Fragment>
    );
};

export default DashboardPage;
