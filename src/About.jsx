import { Grid, Typography, styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CardData from "./CardData";
import halfCircle from "./accects/half-circle.png";
import curnIcon from "./accects/corn-left-icon.png";

const halfCircle1 =
  "https://html.designingmedia.com/folioflix/assets/image/circle-bg-left-img.png";

const About = () => {
  return (
    <>
      <MainStyle>
        <img src={halfCircle1} alt="halfCircle" className="halfCircle" />
        <img src={halfCircle} alt="halfCircle" className="halfCircle1" />
        <img src={curnIcon} alt="curnIcon" className="curnIcons" />
        <Container className="mainContainer">
          <Box className="headingBox">
            <Typography component="h6" className="title">
              My Expertise
            </Typography>
            <Typography component="h2" className="heading">
              Provide Wide Range of Digital Services
            </Typography>
          </Box>
          <Grid container spacing={7} className="cardContainer">
            {CardData.map((val) => {
              return (
                <Grid key={val.id} item lg={6} md={6} sm={12} xs={12}>
                  <Box className="cardBox">
                    <Box className="imgBox">
                      <img src={val.imgUrl} alt="imgUrl" className="imgUrl" />
                    </Box>
                    <Box>
                      <Typography className="cardTitle">{val.title}</Typography>
                      <Typography className="cardDetail">
                        {val.detail}
                      </Typography>
                      <span>
                        <a
                          href="https://html.designingmedia.com/folioflix/"
                          target="_blank"
                          className="readMore"
                        >
                          {" "}
                          {val.button}
                        </a>
                      </span>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "100px 0",
  position: "relative",
  "& .curnIcons": {
    position: "absolute",
    bottom: "280px",
    right: "141px",
    animation: "mymove21 1s ease-in-out infinite alternate",
    "@keyframes mymove21": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
  "& .halfCircle1": {
    position: "absolute",
    top: "154px",
    left: "72px",
    animation: "mymove2 1s ease-in-out infinite alternate",
    "@keyframes mymove2": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
  "& .readMore": {
    textDecoration: "none",
    color: "#FBA61F",
    fontSize: "18px",
    fontFamily: "Josefin Sans, sans-serif",
  },
  "& .imgUrl": {
    height: "66px",
    width: "66px,",
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
  },
  "& .cardDetail": {
    color: "#7D7789",
    fontWeight: 300,
    fontSize: "18px",
    marginBottom: 5,
    lineHeight: "28px",
  },
  "& .cardTitle": {
    color: "#3F396D",
    fontWeight: 700,
    fontSize: "26px",
    marginBottom: 5,
    lineHeight: "28px",
  },
  "& .cardContainer": {
    marginTop: 20,
  },
  "& .imgBox": {
    height: "125px",
    width: "275px",
    display: "flex",
    background: "#f4f9ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  },
  "& .cardBox": {
    display: "flex",
    gap: 20,
    background: "#fff",
    alignItems: "center",
    border: "1px solid transparent",
    padding: "38px 35px",
    borderRadius: "20px",
    boxShadow: "0 0 85px 0 #e9eefc",
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      border: "1px solid #7136FE",
      transform: "rotate(-1.5deg)",
    },
    "& :hover .cardTitle": { color: "#5c1cf1" },
  },
  "& .cardBox:hover .readMore": {
    borderBottom: "1px solid #7136FE",
    color: "#7136FE",
  },
  "& .cardBox:hover .imgUrl": {
    transform: "translateY(-8px)",
  },

  "& .headingBox": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .heading": {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "52px",
    color: "#3F396D",
    width: "70%",
    lineHeight: "1em",
  },
  "& .title": {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "22px",
    marginBottom: "14px",
    color: "#7136FE",
    lineHeight: "24px",
  },
  "& .mainContainer": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .halfCircle": {
    position: "absolute",
    top: 210,
    left: 0,
    animation: "mymove3 1s  infinite alternate",
    "@keyframes mymove3": {
      "0%": { transform: "translateX(0px)" },
      "100%": { transform: "translateX(-10px)" },
    },
  },
});

export default About;
