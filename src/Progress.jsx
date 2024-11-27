import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import React from "react";

const Progress = () => {
  return (
    <>
      <MainStyle>
        <Container maxWidth="lg" className="mainContainer">
          <img
            src="https://html.designingmedia.com/folioflix/assets/image/circle-bg-img.png"
            alt="blueCircle"
            className="blueCircle"
          />
          <img
            src="https://html.designingmedia.com/folioflix/assets/image/half-circle-right-icon.png"
            alt="halfCircle"
            className="halfCircle"
          />
          <img
            src="https://html.designingmedia.com/folioflix/assets/image/triangle-icon.png"
            alt="tringle"
            className="tringle"
          />
          <Grid container xs={12} spacing={15} className="innerGrid">
            <Grid item lg={3} md={3} sm={6} xs={12} className="itemGrid1">
              <Box className="boxContainer">
                <Box className="innerBox1">
                  <CircularProgress
                    variant="determinate"
                    value={75}
                    size={140}
                    thickness={1.3}
                    style={{ color: "#FBA824" }}
                  />
                  <Typography className="number1" component={"h1"}>
                    75%
                  </Typography>
                  <Typography className="boxTitle">Graphic Design</Typography>
                </Box>

                <Box className="innerBox1">
                  <CircularProgress
                    variant="determinate"
                    value={85}
                    size={140}
                    thickness={1.3}
                    style={{ color: "#56CBBD" }}
                  />
                  <Typography className="number2" component={"h1"}>
                    85%
                  </Typography>
                  <Typography className="boxTitle">Branding Design</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12} className="itemGrid1">
              <Box className="innerBox2">
                <Box className="innerBox1">
                  <CircularProgress
                    variant="determinate"
                    value={95}
                    size={140}
                    thickness={1.3}
                    style={{ color: "#7B47FE" }}
                  />
                  <Typography className="number3" component={"h1"}>
                    95%
                  </Typography>
                  <Typography className="boxTitle">Web Designing</Typography>
                </Box>
                <Box className="innerBox1">
                  <CircularProgress
                    variant="determinate"
                    value={80}
                    size={140}
                    thickness={1.3}
                    style={{ color: "#3F396D" }}
                  />
                  <Typography className="number4" component={"h1"}>
                    80%
                  </Typography>
                  <Typography className="boxTitle">Web Development</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography className="title">My Skills</Typography>
              <Typography className="heading">
                Beautiful & Unique Digital Experiences
              </Typography>
              <Typography className="detail">
                Nostrum exercitationem ullam corporis suscipit laborioa nisi ut
                aliquid exrea commodi consequatur magni dolores aos qui ratione
                voluptatem nesciunt.
              </Typography>
              <Typography className="smallDetail">
                Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
                consequntar magni dolores.
              </Typography>
              <Button className="downloadBtn">Download CV</Button>
            </Grid>
          </Grid>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "100px 0",
  background: "#EBF8FF",
  position: "relative",

  "& .innerGrid": {
    display: "flex",
    alignItems: "center",
  },

  "& .blueCircle": {
    position: "absolute",
    right: 0,
    animation: "mymove31 1s  infinite alternate",
    "@keyframes mymove31": {
      "0%": { transform: "translateX(0px)" },
      "100%": { transform: "translateX(-5px)" },
    },
  },
  "& .halfCircle": {
    position: "absolute",
    right: "72px",
    top: "144px",
    animation: "mymove21 1s ease-out infinite alternate",
    "@keyframes mymove21": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
  "& .tringle": {
    position: "absolute",
    left: "150px",
    bottom: "160px",
    animation: "mymove22 1s ease-out infinite alternate",
    "@keyframes mymove22": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
  "& .mainContainer": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .boxTitle": {
    position: "absolute",
    bottom: "5px",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "33px",
    marginTop: 20,
    marginBottom: 20,
  },
  "& .number4": {
    position: "absolute",
    fontSize: "42px",
    fontWeight: 700,
    color: "#3F396D",
  },
  "& .number3": {
    position: "absolute",
    fontSize: "42px",
    fontWeight: 700,
    color: "#7B47FE",
  },
  "& .number2": {
    position: "absolute",
    fontSize: "42px",
    fontWeight: 700,
    color: "#56CBBD",
  },
  "& .number1": {
    position: "absolute",
    fontSize: "42px",
    fontWeight: 700,
    color: "#FBA824",
  },
  "& .itemGrid1": {
    display: "flex",
    justifyContent: "center",
  },
  "& .itemGrid1": {
    display: "flex",
    justifyContent: "center",
  },
  "& .innerBox2": {
    marginTop: "50px",
    transition: "transform 0.3s ease-in-out",
    "& :hover": {
      transform: "scale(1)",
    },
  },
  "& .boxContainer": {
    transition: "transform 0.3s ease-in-out",
    "& :hover": {
      transform: "scale(1)",
    },
  },
  "& .innerBox1": {
    position: "relative",
    height: "auto",
    width: "140px",
    background: "#ffffff",
    padding: "33px 56px 69px",
    boxShadow: "0 0 85px 0 #e9eefc",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  "& .downloadBtn": {
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
  "& .smallDetail": {
    width: "500px",
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "15px",
    lineHeight: "33px",
    color: "#7d7789",
    fontFamily: "Lato, sans-serif",
  },
  "& .detail": {
    width: "500px",
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "15px",
    lineHeight: "33px",
    color: "#7d7789",
    fontFamily: "Lato, sans-serif",
  },
  "& .heading": {
    width: "500px",
    fontSize: "52px",
    fontWeight: 700,
    marginBottom: "11px",
    lineHeight: "54px",
    color: "#3F396D",
  },
  "& .title": {
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "15px",
    lineHeight: "24px",
    color: "#7136FE",
  },
});

export default Progress;
