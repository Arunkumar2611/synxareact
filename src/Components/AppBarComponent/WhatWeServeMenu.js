import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { KeyboardArrowDown } from "@mui/icons-material";

const noUnderline = { textDecoration: "none" }

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
                sx={{ color: "black" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDown />}
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
                                <Link style={noUnderline} to={"industries"}><Typography component={"div"} m={2} variant="h5" fontWeight={"bold"}>Industries</Typography></Link>
                                <Grid container>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#startup-companies">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Startup companies
                                                </Typography>
                                            </MenuItem>
                                            </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#fintech-startups">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Fintech Startups
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#retail-industry">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Retail Industry
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#e-commerce-businesses">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    E-commerce Businesses
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#advertising-agencies">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Adverstising Agencies
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#educational-institutions">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Educational Institutions
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#interprises">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Interprises
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/industries#climate-tech">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Climate Tech
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={6}>
                            <Link style={noUnderline} to={"customer"}><Typography component={"div"} m={2} variant="h5" fontWeight={"bold"}>Customer</Typography></Link>
                                <Grid container>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/customer#portfolio">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Portfolio
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/customer#testimonials">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Testimonials
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <HashLink style={noUnderline} to="/customer#featured-work">
                                            <MenuItem onClick={handleClose}>
                                                <Typography fontWeight={"bold"}>
                                                    Featured Work
                                                </Typography>
                                            </MenuItem>
                                        </HashLink>
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
