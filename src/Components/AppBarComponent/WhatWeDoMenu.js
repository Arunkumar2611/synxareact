import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Grid, Typography, Hidden } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const noUnderline = { textDecoration: "none" }

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
                                    <Link style={noUnderline} to={"mobileappdevelopment"}>
                                        <MenuItem onClick={handleClose}>
                                            <Typography fontWeight={"bold"}>
                                                Mobile App Development
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to="/mobileappdevelopment#ios">
                                                    <MenuItem onClick={handleClose}>
                                                        IOS
                                                    </MenuItem>
                                                </HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to="/mobileappdevelopment#android">
                                                    <MenuItem onClick={handleClose}>
                                                        Android
                                                    </MenuItem>
                                                </HashLink>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"mobileappdevelopment#hybrid"} ><MenuItem onClick={handleClose}>Hybrid App</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"mobileappdevelopment#pwa"} ><MenuItem onClick={handleClose}>PWA App</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link style={noUnderline} to={"web-3-development"}>
                                        <MenuItem onClick={handleClose}>
                                            <Typography fontWeight={"bold"}>
                                                Web 3.0 Development
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-3-development#blockchain"} ><MenuItem onClick={handleClose}>Blockchain</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-3-development#nft"} ><MenuItem onClick={handleClose}>NFT</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-3-development#crypto"} ><MenuItem onClick={handleClose}>Crypto</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-3-development#defi"} ><MenuItem onClick={handleClose}>Defi</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link style={noUnderline} to={"ai-ml-and-iot-development"}>
                                        <MenuItem onClick={handleClose}>
                                            <Typography fontWeight={"bold"}>
                                                AI/ML and Iot Development
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"ai-ml-and-iot-development#ai-and-ml"} ><MenuItem onClick={handleClose}>AI&ML</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"ai-ml-and-iot-development#iot"} ><MenuItem onClick={handleClose}>IOT</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"ai-ml-and-iot-development#chatbot"} ><MenuItem onClick={handleClose}>ChatBot</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"ai-ml-and-iot-development#automation"} ><MenuItem onClick={handleClose}>Automation</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link style={noUnderline} to={"web-development-service"}>
                                        <MenuItem onClick={handleClose}>
                                            <Typography fontWeight={"bold"}>
                                                Web Development Service
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-development-service#enterprise"} ><MenuItem onClick={handleClose}>Enterprise</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-development-service#b2b-b2c"} ><MenuItem onClick={handleClose}>B2B and B2C</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-development-service#custom-website"} ><MenuItem onClick={handleClose}>
                                                    Custom Website
                                                </MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"web-development-service#e-commerce"} ><MenuItem onClick={handleClose}>E-Commerce</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link style={noUnderline} to={"browser-extn-development"}>
                                        <MenuItem onClick={handleClose}>
                                            <Typography fontWeight={"bold"}>
                                                Browser Extension Development
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"browser-extn-development#chrome"} ><MenuItem onClick={handleClose}>Chrome</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"browser-extn-development#safari"} ><MenuItem onClick={handleClose}>Safari</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"browser-extn-development#firefox"} ><MenuItem onClick={handleClose}>Firefox</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"browser-extn-development#edge"} ><MenuItem onClick={handleClose}>Edge</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Link style={noUnderline} to={"hire-remote-team"}>
                                        <MenuItem onClick={handleClose}>
                                            <Typography fontWeight={"bold"}>
                                                Hire Remote Team
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                    <Hidden smDown>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"hire-remote-team#hire-developer"} ><MenuItem onClick={handleClose}>
                                                    Hire Developer
                                                </MenuItem>
                                                </HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"hire-remote-team#hire-designer"} ><MenuItem onClick={handleClose}>Hire Designer</MenuItem></HashLink>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"hire-remote-team#php-developer"} ><MenuItem onClick={handleClose}>PHP Developer</MenuItem></HashLink>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <HashLink style={noUnderline} to={"hire-remote-team#consulting"} ><MenuItem onClick={handleClose}>Consulting</MenuItem></HashLink>
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
