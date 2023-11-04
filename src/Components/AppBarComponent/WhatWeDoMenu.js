import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Grid, Typography, Hidden } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const WhatWeDoMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <>
            <Button
                sx={{ color: "#fff" }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                Whom We Serve
            </Button>
            <div style={{ display: "inline-block", marginRight: "20px" }}>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                component={"div"}
                                m={2}
                                variant="h5"
                                fontWeight={"bold"}
                            >
                                Services
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            <Link to={"mobileappdevelopment"}>
                                                Mobile App Development
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <Link to={"mobileappdevelopment/ios"} >
                                                    <MenuItem onClick={handleClose}>
                                                        IOS
                                                    </MenuItem>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                    <Link to={"mobileappdevelopment/android"} >
                                                <MenuItem onClick={handleClose}>
                                                    Android
                                                    </MenuItem>
                                                    </Link>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <Link to={"mobileappdevelopment/hybrid"} ><MenuItem onClick={handleClose}>Hybrid App</MenuItem></Link>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Link to={"mobileappdevelopment/pwa"} ><MenuItem onClick={handleClose}>PWA App</MenuItem></Link>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Web 3.0 Development
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Blockchain</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>NFT</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Crypto</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Defi</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            AI/ML and Iot Development
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>AI&ML</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>IOT</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>ChatBot</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Automation</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Web Development Service
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Enterprise</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>B2B and B2C</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>
                                                    Custom Website
                                                </MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>E-Commerce</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Browser Extension Development
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Chrome</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Safari</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Firefox</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Edge</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Hire Remote Team
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>
                                                    Hire Developer
                                                </MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Hire Designer</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>PHP Developer</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Consulting</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography
                                component={"div"}
                                m={2}
                                variant="h5"
                                fontWeight={"bold"}
                            >
                                Technologies
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Mobile Application Technologies
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Android</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>IOS</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>React Native</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Flutter</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {/* Grid Item 5 */}

                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Frontend Technologies
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>ReactJS</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>VueJS</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Tailwind CSS</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Typescript</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Backend Technologies
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Laravel</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Python</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Golang</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>NodeJS</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            FullStack Technologies
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>TALL</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>MERN</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>MEAN</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>LEMP</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            Future Technologies
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>AI</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>ML</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>IOT</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Data Science</MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <MenuItem onClick={handleClose}>
                                        <Typography fontWeight={"bold"}>
                                            DevOps & Cloud Technologies
                                        </Typography>
                                    </MenuItem>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>AWS</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>GCP</MenuItem>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>Jenkins</MenuItem>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <MenuItem onClick={handleClose}>
                                                    Docker/Kubernate
                                                </MenuItem>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Menu>
            </div>
        </>
    );
};

export default WhatWeDoMenu;
