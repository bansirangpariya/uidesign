import { Container, IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <MainStyle>
        <Container maxWidth="lg" className="mainContainer">
          <Box className="mainBox">
            <img
              src="https://html.designingmedia.com/folioflix/assets/image/footer-logo.png"
              alt="logo"
              className="logoImg"
            />
            <Box className="linkBox">
              <a href="#" target="_blank" className="link">
                Home<span className="spanTag">|</span>
              </a>
              <a href="#" target="_blank" className="link">
                About<span className="spanTag">|</span>
              </a>
              <a href="#" target="_blank" className="link">
                Services<span className="spanTag">|</span>
              </a>
              <a href="#" target="_blank" className="link">
                Portfolio<span className="spanTag">|</span>
              </a>
              <a href="#" target="_blank" className="link">
                Blog<span className="spanTag">|</span>
              </a>
              <a href="#" target="_blank" className="link">
                Contact
              </a>
            </Box>
            <Box className="btnBox">
              <IconButton className="iconBtn1">
                <FaBehance />
              </IconButton>
              <IconButton className="iconBtn2">
                <FaDribbble />
              </IconButton>
              <IconButton className="iconBtn3">
                <FaLinkedinIn />
              </IconButton>
            </Box>
          </Box>
          <Box className="footerBox">
            {/* <hr className="hrline" /> */}
            <Typography className="copyright">
              Copyright 2024 FolioFlix.com | All Rights Reserved.
            </Typography>
          </Box>
        </Container>
        <img
          src="https://html.designingmedia.com/folioflix/assets/image/footer-left-dotted-img.png"
          alt="backImgLeft"
          className="backImgLeft"
        />
        <img
          src="https://html.designingmedia.com/folioflix/assets/image/footer-dotted-right-img.png"
          alt="backImgRight"
          className="backImgRight"
        />
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  background: "#211E39",
  padding: "68px 0px 20px",
  position: "relative",
  "& .backImgLeft": {
    position: "absolute",
    top: 0,
    left: 0,
  },
  "& .backImgRight": {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  "& .link:hover .spanTag": {
    color: "#9692b0",
  },
  "& .spanTag": {
    padding: "0px 20px 0px",
  },
  "& .copyright": {
    width: "1110px",
    textAlign: "center",
    fontSize: "14px",
    color: "#9692b0",
    paddingTop: "26px",
    fontFamily: "'Lato', sans-serif",
    borderTop: "1px solid #3e3b4b",
  },
  "& .footerBox": {
    marginTop: "60px",
  },
  "& .btnBox": {
    display: "flex",
    gap: 15,
  },
  "& .link": {
    color: "#9692b0",
    fontSize: "16px",
    fontFamily: "'Lato', sans-serif",
    display: "flex",
    textDecoration: "none",
    "&:hover": {
      color: "#fca61f",
    },
  },
  "& .mainBox": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .linkBox": {
    display: "flex",
    // gap: 50,
    marginBottom: "36px",
  },
  "& .logoImg": {
    marginBottom: "38px",
  },
  "& .mainContainer": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .iconBtn1": {
    height: "45px",
    width: "45px",
    background: "#fff",
    color: "#255afc",
    fontWeight: 400,
    fontSize: "25px",
    padding: "11px",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#255afc",
      color: "#fff",
      transform: "translateY(-8px)",
    },
  },
  "& .iconBtn2": {
    height: "45px",
    width: "45px",
    background: "#fff",
    fontSize: "25px",
    fontWeight: 400,
    color: "#f33a7e",
    padding: "12px",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#f33a7e",
      color: "#fff",
      transform: "translateY(-8px)",
    },
  },
  "& .iconBtn3": {
    height: "45px",
    width: "45px",
    background: "#fff",
    fontSize: "25px",
    fontWeight: 400,
    color: "#2076b2",
    padding: "14px",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#2076b2",
      color: "#fff",
      transform: "translateY(-8px)",
    },
  },
});

export default Footer;
