import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import WhatWeDoMenu from "./WhatWeDoMenu";
import WhatWeServeMenu from "./WhatWeServeMenu";
import Career from "./Career";
import Company from "./Company";
import LOGO from '../../Assets/Logo/synxalogo.png'
import Footer from "../Footer/Footer";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Collapse, ListItemIcon } from "@mui/material";

const drawerWidth = 285;
const navItems = ["Home", "About", "Contact"];

function AppBarComponent(props) {
    const { window } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false)
    const [expendOpen, setExpendOpen] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [expendOpenWhomWeServe, setExpendOpenWhomWeServe] = React.useState(false);
    const [expendOpenCareer, setExpendOpenCareer] = React.useState(false);
    const [expendOpenCompany, setExpendOpenCompany] = React.useState(false);

    const handleExpandClick = () => {
        console.log("handle expend click", expendOpen)
        setExpendOpen(!expendOpen);
        setMobileOpen(false);
    };
    
    const handleExpandWhomWeServeClick = () => {
        console.log("handle expend click", expendOpen)
        setExpendOpenWhomWeServe(!expendOpen);
        setMobileOpen(false);
    };
   
    const handleExpandCareerClick = () => {
        console.log("handle expend click", expendOpen)
        setExpendOpenCareer(!expendOpen);
        setMobileOpen(false);
    };
    
    const handleExpandCompanyClick = () => {
        console.log("handle expend click", expendOpen)
        setExpendOpenCompany(!expendOpen);
        setMobileOpen(false);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const handleDrawerToggle = () => {
        console.log("Inside handle drawer toggle the prev state", mobileOpen)
        setMobileOpen((prevState) => !prevState);
        setExpendOpen(mobileOpen)
    };

    console.log("BOTH", "expendOpen: ", expendOpen, "mobileOpen: ", mobileOpen)

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List disablePadding dense={true}>
                <ListItem disablePadding>
                    <ListItemButton button
                        component={Link}
                        to={'/'}
                    >
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton button
                        component={Link}
                        to={"/blog"}
                    >
                        <ListItemText primary={"Blog"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleExpandClick}
                    >
                        <ListItemText primary={"What We Do"} />
                        {expendOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={expendOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense={true}>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/services"}    
                            >
                                <ListItemText primary="Services" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/mobileappdevelopment"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Mobile App Development" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/web-development-service"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Web Development Service" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/web-3-development"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Web 3.0 Development" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/browser-extn-development"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Browser Entension Development" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/ai-ml-and-iot-development"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="AI/ML Development" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/hire-remote-team"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Hire Remote Team" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/technologies"}    
                            >
                                <ListItemText primary="Technologies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/mobile-app-dev-tech"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Mobile Application Technologies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/frontend-tech"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Frontend Technologies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/backend-tech"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Backend Technologies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/fullstack-tech"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Fullstack Technologies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/future-tech"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Future Technologies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/devops-cloud-tech"}    
                            >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="DevOps & Cloud Technologies" />
                            </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleExpandWhomWeServeClick}
                    >
                        <ListItemText primary={"Whom We Serve"} />
                        {expendOpenWhomWeServe ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={expendOpenWhomWeServe} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense={true}>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries"}    
                            >
                                <ListItemText primary="Industries" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#startup-companies"}    
                            >
                                <ListItemText primary="Startup Companies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#fintech-startups"}    
                            >
                                <ListItemText primary="Fintech Startups" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#retail-industry"}    
                            >

                                <ListItemText primary="Retail Industry" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#e-commerce-businesses"}    
                            >

                                <ListItemText primary="E-commerce Businesses" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#advertising-agencies"}    
                            >
                                
                                <ListItemText primary=" Adverstising Agencies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#educational-institutions"}    
                            >
                                <ListItemText primary="Educational Institutions" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#interprises"}    
                            >
                                
                                <ListItemText primary="Interprises" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/industries#climate-tech"}    
                            >
                                
                                <ListItemText primary="Climate Tech" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/customer"}    
                            >
                                
                                <ListItemText primary="Customer" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/customer#portfolio"}    
                            >
                                
                                <ListItemText primary="Portfolio" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/customer#testimonials"}    
                            >
                                
                                <ListItemText primary="Testimonials" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/customer#featured-work"}    
                            >
                                
                                <ListItemText primary="Featured Work" />
                            </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleExpandCareerClick}
                    >
                        <ListItemText primary={"Career"} />
                        {expendOpenCareer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={expendOpenCareer} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense={true}>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/life-at-synxa"}    
                            >
                                <ListItemText primary="Work Life @ Synxa" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/careers"}    
                            >
                                <ListItemText primary="Open Positions / Vacancies" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/apply-for-job"}    
                            >
                                <ListItemText primary="Apply For a Job Now" />
                            </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleExpandCompanyClick}
                    >
                        <ListItemText primary={"Career"} />
                        {expendOpenCompany ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={expendOpenCompany} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense={true}>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/about-us"}    
                            >
                                <ListItemText primary="About Us" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/infrastructure"}    
                            >
                                <ListItemText primary="Infrastructure" />
                            </ListItemButton>
                            <ListItemButton
                                button
                                component={Link}
                                to={"/enquiry"}    
                            >
                                <ListItemText primary="Contact Us" />
                            </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton button
                        component={Link}
                        to={'/blog'}
                    >
                        <ListItemText primary={"Blog"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" elevation={0} sx={{ backgroundColor: "violet" }}>
                <Toolbar>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            <img src={LOGO} alt="Logo" />
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            <Button sx={{ color: "black" }}>Home</Button>
                        </Link>

                        <WhatWeDoMenu />

                        <WhatWeServeMenu />

                        <Career />

                        <Company />

                        <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
                            <Button sx={{ color: "black" }}>Blog</Button>
                        </Link>

                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" style={{ width: "100%" }}>
                <Toolbar />
                <Box component="main" sx={{ p: 10 }}>
                    <Outlet />
                </Box>
                <Toolbar />
                <Footer />
            </Box>
        </Box>
    );
}

export default AppBarComponent;
