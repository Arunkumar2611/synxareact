import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";

const noUnderline = { textDecoration: "none" }

const Career = () => {
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
        Career
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
                    <Link style={noUnderline} to="/life-at-synxa">
                      <MenuItem onClick={handleClose}>
                        <Typography fontWeight={"bold"}>
                          Work Life @ synxa
                        </Typography>
                      </MenuItem>
                    </Link>
                  </Grid>
                  <Grid item >
                    <Link style={noUnderline} to="/careers">
                      <MenuItem onClick={handleClose}>
                        <Typography fontWeight={"bold"}>
                          Open Position/vacancies
                        </Typography>
                      </MenuItem>
                    </Link>
                  </Grid>
                  <Grid item >
                    <Link style={noUnderline} to="/apply-for-job">
                      <MenuItem onClick={handleClose}>
                        <Typography fontWeight={"bold"}>
                          Apply For a Job Now
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

export default Career;
