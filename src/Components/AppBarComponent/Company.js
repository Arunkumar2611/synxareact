import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";

const noUnderline = { textDecoration: "none" }

const Company = () => {
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
        Company
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
          <Box maxWidth={250}>
            <Grid container spacing={2} >
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item >
                    <Link style={noUnderline} to="/about-us">
                      <MenuItem onClick={handleClose}>
                        <Typography fontWeight={"bold"}>
                          About Us
                        </Typography>
                      </MenuItem>
                    </Link>
                  </Grid>
                  <Grid item >
                    <Link style={noUnderline} to="/infrastructure">
                      <MenuItem onClick={handleClose}>
                        <Typography fontWeight={"bold"}>
                          Our Infrastructure
                        </Typography>
                      </MenuItem>
                    </Link>
                  </Grid>
                  <Grid item >
                    <Link style={noUnderline} to="/enquiry">
                      <MenuItem onClick={handleClose}>
                        <Typography fontWeight={"bold"}>
                          Enquiry
                        </Typography>
                      </MenuItem>
                    </Link>
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

export default Company;
