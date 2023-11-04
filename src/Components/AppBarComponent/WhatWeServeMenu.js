import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Grid, Typography } from "@mui/material";

const WhatWeServeMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <>
            <Button
                sx={{ color: "#fff" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Whom We Serve
            </Button>
            <div style={{ display: "inline-block", marginRight: "20px" }}>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>
                    <Box maxWidth={500}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={6} >
                                <Typography component={"div"} m={2} variant="h5" fontWeight={"bold"}>Industries</Typography>
                                <Grid container>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Startup companies
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Fintech Startups
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Retail Industry
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    E-commerce Businesses
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Adverstising Agencies
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Fintech Startups
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Educational Institutions
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Interprises
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Climate Tech
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography component={"div"} m={2} variant="h5" fontWeight={"bold"}>Customer</Typography>
                                <Grid container>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Portfolio
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Testimonials
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div >
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Featured Work
                                                </Typography>
                                            </MenuItem>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>
                </Menu>
            </div>
        </>

    );
};

export default WhatWeServeMenu;
