import { Container, Grid, Typography, IconButton } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import mainImg from "./accects/tastimonials-img.png";
import halfCircle4 from "./accects/half-circle.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const purpleCircle =
  "https://html.designingmedia.com/folioflix/assets/image/circle-bg-left-img.png";

const Feedback = () => {
  return (
    <>
      <MainStyle>
        <img src={halfCircle4} alt="purpleCircle" className="halfCircle4" />
        <img src={purpleCircle} alt="purpleCircle" className="purpleCircle" />
        <Container maxWidth="lg">
          <Grid container xs={12}>
            <Grid item lg={6}>
              <Box className="imgBox">
                <img src={mainImg} alt="mainImg" className="mainImg" />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Typography className="title">Testimonials</Typography>
              <Typography className="heading">
                Happy Clients Feedback
              </Typography>
              <Box className="innerBox">
                <img
                  src="https://html.designingmedia.com/folioflix/assets/image/comma-icon.png"
                  alt="boxImg"
                  className="boxImg"
                />
                <Typography className="paragraph">
                  Quisruam est, qui dolorem ipsum quia dolor sit amet,
                  consecteaur aeci velit, sed quia non numquam eius modi tempora
                  incidunt ut lao magnam aliquam quaerat voluptatem
                  reprehenderit in voluptate cillum dolore eu fugiat nulla
                  pariatur maxime...
                </Typography>
              </Box>
              <Typography className="author">Kevin Andrew</Typography>
              <Typography className="post">CEO of the company</Typography>
              <Box className="btnBox">
                <IconButton className="imgWrapBtn">
                  <FaArrowLeft className="rightArrow" />
                </IconButton>
                <IconButton className="imgWrapBtn2">
                  <FaArrowRight className="rightArrow" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "130px 0",
  position: "relative",
  marginTop: "500px",
  "& .btnBox": {
    display: "flex",
    gap: 12,
    margin: "24px 0 0 40px",
  },
  "& .imgWrapBtn2": {
    background: "#FCA61F",
    color: "#fff",
    fontWeight: 400,
    fontSize: "25px",
    padding: "14px",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#6F34FE",
      color: "#fff",
      transform: "translateX(8px)",
    },
  },
  "& .imgWrapBtn": {
    background: "#FCA61F",
    color: "#fff",
    fontWeight: 400,
    fontSize: "25px",
    padding: "14px",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      background: "#6F34FE",
      color: "#fff",
      transform: "translateX(-8px)",
    },
  },
  "& .post": {
    fontSize: "16px",
    lineHeight: "16px",
    color: "var(--text-color)",
    fontFamily: "'Lato', sans-serif",
    marginLeft: "48px",
  },
  "& .author": {
    color: "#56517F",
    fontSize: "20px",
    lineHeight: "22px",
    margin: "16px 0 6px 48px",
    fontWeight: 600,
    letterSpacing: "0.2px",
  },
  "& .paragraph": {
    color: "#7D7789",
    fontSize: "20px",
    lineHeight: "33px",
    fontFamily: "Lato, sans-serif",
  },
  "& .boxImg": {
    height: "28px",
    width: "38px",
  },
  "& .innerBox": {
    display: "flex",
    gap: 10,
  },
  "& .heading": {
    width: "635px",
    color: "#3F396D",
    fontSize: "52px",
    lineHeight: "54px",
    fontWeight: 700,
    marginBottom: "12px",
  },
  "& .title": {
    color: "#6F34FE",
    fontSize: "24px",
    lineHeight: "24px",
    fontWeight: 600,
    marginBottom: "14px",
  },
  "& .imgBox": {
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  "& .purpleCircle": {
    position: "absolute",
    top: 210,
    left: 0,
    animation: "mymove63 1s  infinite alternate",
    "@keyframes mymove63": {
      "0%": { transform: "translateX(0px)" },
      "100%": { transform: "translateX(-10px)" },
    },
  },
  "& .halfCircle4": {
    position: "absolute",
    top: "154px",
    left: "72px",
    animation: "mymove71 1s ease-in-out infinite alternate",
    "@keyframes mymove71": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
});

export default Feedback;
