import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import { FaBehance, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import curnImg from "./accects/curn-icon.png";
import tringle from "./accects/triangle-icon.png";

const logoImg =
  "https://html.designingmedia.com/folioflix/assets/image/banner-right-img.png";
const halfCircle =
  "https://html.designingmedia.com/folioflix/assets/image/half-circle.png";

const Home = () => {
  return (
    <MainStyle>
      <Container>
        <Grid container spacing={4} className="mainContainer">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box className="mainBox">
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
              <Box className="contentBox">
                <Typography className="heading">
                  Hello, I Am <br />
                  <span className="span">Alina Parker</span>
                </Typography>
                <Typography className="paragraph">
                  Duis aute irure dolor in reprehenderit in voluptareu dolore eu
                  fugiat nulla pariatur.
                </Typography>
                <Box className="lastBox">
                  <Button className="hireBtn">Hire Me</Button>
                  <Typography className="span2">See My Work</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* Right Content */}
          <Grid item xs={12} md={6} className="imgBox">
            <img src={logoImg} alt="logoImg" className="logoImg" />
            <img src={halfCircle} alt="halfCircle" className="halfCircle" />
            <img src={curnImg} alt="curnImg" className="curnImg" />
            <img src={tringle} alt="tringle" className="tringle" />
          </Grid>
        </Grid>
      </Container>
    </MainStyle>
  );
};

const MainStyle = styled(Box)(({ theme }) => ({
  padding: "15px 20px",
  background: "#EFF5FF",
  "& .mainContainer": {
    alignItems: "center",
  },
  "& .imgBox": {
    position: "relative",
    textAlign: "center",
  },
  "& .logoImg": {
    maxWidth: "100%",
    animation: "mymove 1s ease-in-out infinite alternate",
    "@keyframes mymove": {
      "0%": { transform: "translateX(5px)" },
      "100%": { transform: "translateX(-5px)" },
    },
  },
  "& .contentBox": {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  "& .paragraph": {
    fontSize: "18px",
    color: "#7d7789",
    margin: "10px 0",
  },
  "& .heading": {
    fontSize: "32px",
    fontWeight: 600,
    color: "#3f396d",
    lineHeight: "1.5",
    [theme.breakpoints.up("md")]: {
      fontSize: "42px",
    },
  },
  "& .span": {
    fontSize: "50px",
    color: "#6f34fe",
    fontWeight: 700,
    borderRight: ".1em solid orange",
    animation:
      "typing 2s steps(20, end) forwards, blink-caret 0.75s step-end infinite",
    "@keyframes typing": { from: { width: "0" }, to: { width: "100%" } },
    "@keyframes blink-caret": {
      "from, to": { borderColor: "transparent" },
      "50%": { borderColor: "orange" },
    },
  },
  "& .hireBtn": {
    background: "#fca61f",
    color: "#fff",
    padding: "10px 40px",
    borderRadius: "30px",
    textTransform: "none",
    fontSize: "16px",
    margin: "10px 0",
    "&:hover": {
      background: "#6f34fe",
    },
  },
  "& .span2": {
    color: "#6f34fe",
    fontSize: "16px",
    borderBottom: "1px solid #6f34fe",
    cursor: "pointer",
    "&:hover": {
      color: "#fca61f",
      borderBottom: "1px solid #fca61f",
    },
  },
  "& .btnBox": {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  "& .iconBtn1, & .iconBtn2, & .iconBtn3": {
    background: "#fff",
    fontSize: "24px",
    padding: "12px",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
    },
  },
  "& .halfCircle, & .curnImg, & .tringle": {
    position: "absolute",
    animation: "float 1.5s ease-in-out infinite",
    "@keyframes float": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-10px)" },
      "100%": { transform: "translateY(0px)" },
    },
  },
  "& .halfCircle": { top: "20px", right: "10%" },
  "& .curnImg": { top: "50%", left: "10%" },
  "& .tringle": { bottom: "20px", right: "15%" },
}));

export default Home;
