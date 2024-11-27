import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  color,
  display,
  fontSize,
  height,
  margin,
  padding,
  styled,
  textAlign,
  width,
} from "@mui/system";
import { Hidden } from "@mui/material";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainStyle>
      <Button
        className="basicButton"
        aria-controls={open ? "basicMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon className="barIcon" />
      </Button>
      <MenuStyle
        className="basicMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basicButton",
        }}
      >
        <MenuItem onClick={handleClose} className="menuItems">
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuItems" >Services</MenuItem>
        <MenuItem onClick={handleClose} className="menuItems">About</MenuItem>
        <MenuItem onClick={handleClose} className="menuItems">Portfolio</MenuItem>
        <MenuItem onClick={handleClose} className="menuItems">Testimonials</MenuItem>
        <MenuItem onClick={handleClose} className="menuItems">Blog</MenuItem>
        <MenuItem onClick={handleClose} className="menuItems" >
          <Button className="contactBtn">Contact</Button>
        </MenuItem>
      </MenuStyle>
    </MainStyle>
  );
}
const MainStyle = styled(Box)({
  "& .css-6hp17o-MuiList-root-MuiMenu-list": {
    padding: "15px 20px",
    display: "flex",
  },
  "& .MuiMenuList-padding": {
padding:"0px"
  },
  "& .menuItems": {
    padding: "10px 56px",
  },
  "& .basicMenu": {
    display: "flex",
  },
  "& .basicButton": {
    "@media(max-width: 354px)": {
      marginLeft: 50,
    },
  },
  "& .barIcon": {
    color: "#fca61f",
    height: 30,
    width: 30,
    "@media(min-width: 660px)": {
      display: "none",
    },
  },
});
const MenuStyle = styled(Menu)({
    "& .css-18juiwo-MuiButtonBase-root-MuiMenuItem-root:hover":{
        backgroundColor:"white",
        color:"#fca61f"
    },
    "& .contactBtn":{
        background:'#fca61f',
        color:'#ffffff',
        padding:'4px 16px',
        borderRadius:'45px',
        fontSize:'13px',
        fontWeight:500,
        textTransform:"none",
        transitionDuration: "0.3s",
        transitionProperty: "transform",
        transitionTimingFunction: "ease-out",
        "&:hover":{
          background:'#6f34fe',
           transform: "translateY(-8px)",
        }
        },
"& .menuItems":{
    color:"black",
    padding: "4px 60px 3px 15px",
    fontSize:"11px",
    height:'auto',
},
  });
  