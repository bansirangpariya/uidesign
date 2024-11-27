import { Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { Box, styled } from "@mui/system";
import { FaArrowRight } from "react-icons/fa";

const curImg =
  "https://html.designingmedia.com/folioflix/assets/image/corn-left-icon.png";
const img1 =
  "https://html.designingmedia.com/folioflix/assets/image/portfolio-img1.png";
const img2 =
  "https://html.designingmedia.com/folioflix/assets/image/portfolio-img2.png";
const img3 =
  "https://html.designingmedia.com/folioflix/assets/image/portfolio-img3.png";
const img4 =
  "https://html.designingmedia.com/folioflix/assets/image/portfolio-img4.png";
const img5 =
  "https://html.designingmedia.com/folioflix/assets/image/portfolio-img5.png";

const Purple = () => {
  return (
    <>
      <MainStyle>
        <img src={curImg} alt="curImg" className="curImg" />
        <img
          src="https://html.designingmedia.com/folioflix/assets/image/portfolio-left-img.png"
          alt="backgroundImg"
          className="leftImg"
        />
        <img
          src="https://html.designingmedia.com/folioflix/assets/image/portfolio-right-img.png"
          alt="rightImg"
          className="rightImg"
        />
        <Container className="mainContainer">
          <Typography className="title">Creative Works</Typography>
          <Typography className="heading">Check My Portfolio</Typography>

          <Box className="buttonBox">
            <a
              href="https://html.designingmedia.com/folioflix/#about-con"
              target="_blank"
              className="linkBtn"
            >
              All
            </a>
            <a
              href="https://html.designingmedia.com/folioflix/#about-con"
              target="_blank"
              className="linkBtn"
            >
              Products
            </a>
            <a
              href="https://html.designingmedia.com/folioflix/#about-con"
              target="_blank"
              className="linkBtn"
            >
              Web App
            </a>
            <a
              href="https://html.designingmedia.com/folioflix/#about-con"
              target="_blank"
              className="linkBtn"
            >
              Inetraction
            </a>
            <a
              href="https://html.designingmedia.com/folioflix/#about-con"
              target="_blank"
              className="linkBtn"
            >
              Brand Identity
            </a>
          </Box>
        </Container>
        <Container>
          <Box className="imgBox1">
            <Box className="mainBox">
              <img src={img1} alt="img1" className="firstImg" />
              <Box className="imgWrapBox">
                <Box sx={{ width: "100%", padding: "20px" }}>
                  <Typography className="imgWrapText">
                    Application UI Design
                  </Typography>
                  <Typography className="imgWrapText1">
                    Dolar repellendus temporibus...
                  </Typography>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <IconButton className="imgWrapBtn">
                    <FaArrowRight className="rightArrow" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box className="mainBox">
              <img src={img2} alt="img2" className="secondImg" />
              <Box className="imgWrapBox">
                <Box sx={{ width: "100%", padding: "20px" }}>
                  <Typography className="imgWrapText">
                    Furni furniture UI Design
                  </Typography>
                  <Typography className="imgWrapText1">
                    Dolar repellendus temporibus...
                  </Typography>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <IconButton className="imgWrapBtn">
                    <FaArrowRight className="rightArrow" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="imgBox2">
            <Box className="mainBox">
              <img src={img3} alt="img3" className="thirdImg" />
              <Box className="imgWrapBox">
                <Box sx={{ width: "100%", padding: "20px" }}>
                  <Typography className="imgWrapText">
                    Mobile UI Design
                  </Typography>
                  <Typography className="imgWrapText1">
                    Dolar repellendus temporibus...
                  </Typography>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <IconButton className="imgWrapBtn">
                    <FaArrowRight className="rightArrow" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box className="mainBox">
              <img src={img4} alt="img4" className="forthImg" />
              <Box className="imgWrapBox">
                <Box sx={{ width: "100%", padding: "20px" }}>
                  <Typography className="imgWrapText">
                    Businesscard UI Design
                  </Typography>
                  <Typography className="imgWrapText1">
                    Dolar repellendus temporibus...
                  </Typography>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <IconButton className="imgWrapBtn">
                    <FaArrowRight className="rightArrow" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box className="mainBox">
              <img src={img5} alt="img5" className="fifthImg" />
              <Box className="imgWrapBox">
                <Box sx={{ width: "100%", padding: "20px" }}>
                  <Typography className="imgWrapText">
                    Real estate UI Design
                  </Typography>
                  <Typography className="imgWrapText1">
                    Dolar repellendus temporibus...
                  </Typography>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <IconButton className="imgWrapBtn">
                    <FaArrowRight className="rightArrow" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  height: "414px",
  background: "#6F34FE",
  padding: "130px 0 0",
  position: "relative",
  "& .curImg": {
    position: "absolute",
    right: "200px",
    bottom: "-400px",
    animation: "mymove42 1s ease-out infinite alternate",
    "@keyframes mymove42": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
  "& .rightArrow": {
    fontSize: "20px",
    fontWeight: "100",
  },
  "& .mainBox:hover .imgWrapBtn": {
    background: "#FCA61F",
    color: "white",
  },

  "& .imgWrapBtn": {
    height: "50px",
    width: "50px",
    background: "transparent",
    color: "transparent",
    borderRadius: "50%",
    padding: "0",
  },
  "& .mainBox": {
    position: "relative",
  },
  "& .imgBox2": {
    display: "flex",
    gap: 30,
    marginTop: 30,
  },
  "& .thirdImg": {
    height: "320px",
    width: "340px",
    // position: "absolute",
  },
  "& .forthImg": {
    height: "320px",
    width: "340px",
  },
  "& .fifthImg": {
    height: "320px",
    width: "340px",
  },
  "& .secondImg": {
    height: "320px",
    width: "340px",
  },
  "& .firstImg": {
    height: "320px",
    width: "710px",
  },
  "& .imgBox1": {
    display: "flex",
    gap: 30,
  },
  "& .buttonBox": {
    margin: "20px 0 25px",
  },
  "& .linkBtn": {
    textDecoration: "none",
    color: "#fff",
    background: "transparent",
    fontSize: "20px",
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-block",
    margin: "30px 25px",
    fontFamily: "Josefin Sans, sans-serif",
    "&:hover": {
      color: "#FCA61F",
      // borderBottom:'2px solid #FCA61F'
    },
  },
  "& .heading": {
    fontSize: "52px",
    fontWeight: 700,
    color: "#fff",
    lineHeight: "54px",
  },
  "& .title": {
    fontSize: "22px",
    fontWeight: 600,
    color: "#fff",
    lineHeight: "24px",
    marginBottom: "14px",
  },
  "& .mainContainer": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .rightImg": {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  "& .leftImg": {
    position: "absolute",
    left: 0,
    top: 0,
  },
  "& .imgWrapBox": {
    height: "99%",
    width: "100%",
    display: "flex",
    justifyContant: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#00000000",
    position: "absolute",
    bottom: "3px",
    borderRadius: "19px",
    "&:hover": {
      backgroundColor: "#0000005c",
    },
  },
  "& .imgWrapText1": {
    width: "220px",
    color: "transparent",
    fontSize: "16px",
    marginBottom: "0",
    lineHeight: "22px",
    fontFamily: "'Lato', sans-serif",
  },
  "& .mainBox:hover .imgWrapText1": {
    color: "white",
  },
  "& .mainBox:hover .imgWrapText": {
    color: "white",
  },
  "& .imgWrapText": {
    width: "220px",
    fontWeight: 700,
    color: "transparent",
    marginBottom: "0",
    fontSize: "18px",
    lineHeight: "18px",
  },
});

export default Purple;
