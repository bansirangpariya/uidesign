import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";

const logourl =
  "https://html.designingmedia.com/folioflix/assets/image/logo-img.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <MainStyle>
      <Grid container className="mainContainer" alignItems="center">
        {/* Logo */}
        <Grid item xs={6} sm={3}>
          <img src={logourl} alt="logourl" className="logourl" />
        </Grid>

        {/* Desktop Menu */}
        <Grid item sm={7} className="menuBar">
          <Hidden xsDown>
            <Typography className="menuList">Home</Typography>
            <Typography className="menuList">Services</Typography>
            <Typography className="menuList">About</Typography>
            <Typography className="menuList">Portfolio</Typography>
            <Typography className="menuList">Testimonials</Typography>
            <Typography className="menuList">Blog</Typography>
            <Button className="contactBtn">Contact</Button>
          </Hidden>
        </Grid>

        {/* Mobile Menu Icon */}
        <Grid item xs={6} sm={2} className="menuIcon">
          <Hidden smUp>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Grid>
      </Grid>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {[
              "Home",
              "Services",
              "About",
              "Portfolio",
              "Testimonials",
              "Blog",
            ].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem>
              <Button className="contactBtn">Contact</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </MainStyle>
  );
};

const MainStyle = styled(Box)(({ theme }) => ({
  background: "#EFF5FF",
  padding: "26px 60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& .contactBtn": {
    background: "#fca61f",
    color: "#ffffff",
    padding: "8px 43px",
    borderRadius: "45px",
    fontSize: "20px",
    fontWeight: 500,
    textTransform: "none",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#6f34fe",
      transform: "translateY(-8px)",
    },
  },
  "& .menuList": {
    color: "#07003b",
    fontSize: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "#fca61f",
    },
  },
  "& .menuBar": {
    display: "flex",
    alignItems: "center",
    gap: 27,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "& .menuIcon": {
    textAlign: "right",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  "& .mainContainer": {
    padding: "0 20px",
  },
  "& .logourl": {
    maxWidth: "100%",
    height: "auto",
  },
}));

export default Navbar;
