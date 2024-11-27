import { Card, Container, Grid, Typography } from "@mui/material";
import { Box,  styled } from "@mui/system";
import React from "react";
import BlogData from "./BlogData";

const Blog = () => {
  return (
    <>
      <MainStyle>
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
        <Container maxWidth="lg" className="mainContainer">
          <Typography className="title"> Latest News </Typography>
          <Typography className="heading"> Blog & Articles </Typography>
          <Grid container xs={12} spacing={3} className="innerContainer">
            {BlogData.map((item) => {
              return (
                <Grid key={item.id} item lg={4} md={4} sm={12} xs={12}>
                  <Card className="cardContainer">
                    <Box>
                      <img
                        src={item.imgUrl}
                        alt="cardImg"
                        className="cardImg"
                      />
                    </Box>
                    <Box className='cardMainBox'>
                    <Box className='cardBox'>
                      <Typography className="cardAuthor">{item.author}</Typography>
                      <Typography className="cardDate">{item.date}</Typography>
                    </Box>
                    <Typography className="cardTitle">{item.title}</Typography>
                    <Typography className="cardDetail">{item.detail}</Typography>
                    <a href="#" target="_blank" className="cardBtn">{item.linkBtn}</a>
                    </Box>
                  </Card>
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
  padding: "120px 0",
  background: "#F2F2FF",
  position: "relative",
  "& .cardContainer:hover .cardImg": {
   transform: "scale(1.1)",
  },
  "& .cardBtn":{
    width:'auto',
    fontSize:'18px',
    paddingBottom:'6px',
    color:'#FBA61F',
    fontWeight:400,
    textDecoration:'none',
    fontFamily:"Josefin Sans, sans-serif",
    "&:hover":{
      color:'#6F34FE',
      borderBottom:'2px solid #6F34FE'
     },
  },
  "& .cardDetail": {
    color: "#7d7789",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "28px",
   marginBottom: "12px",
   fontFamily: "'Lato', sans-serif",
   
  },
  "& .cardTitle": {
    color: "#3F396D",
    fontWeight: 700,
    fontSize: "26px",
    lineHeight: "28px",
   marginBottom: "11px",
  
   "&:hover":{
    color:'#FBA61F',
  
   },
  },
  "& .cardDate":{
    fontSize: "16px", 
    fontFamily: "'Lato', sans-serif",
    color:'#7d7789',
    fontWeight: 400,
  },
  "& .cardAuthor":{
    fontSize: "16px", 
    fontFamily: "'Lato', sans-serif",
    color:'#6f34fe',
    fontWeight: 400,
    
  },
  "& .cardMainBox":{
    padding:25,
  },
  "& .cardBox":{
    display:'flex',
    justifyContent:'space-between',
    marginBottom:'10px'
  },
  "& .innerContainer":{
    marginTop:'10px',
   
  },
  "& .cardImg":{
    width:'100%',
    height:'40%',
    borderRadius:'20px',
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
  },
  "& .cardContainer":{
    width:'98%',
    height:'538px',
    borderRadius:'20px',
  },
  "& .title": {
    color: "#6F34FE",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "24px",
    marginBottom: "14px",
  },
  "& .heading": {
    color: "#3F396D",
    fontWeight: 700,
    fontSize: "42px",
    lineHeight: "48px",
   marginBottom: "0 !important"
  },
  "& .mainContainer": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    left: "100px",
    bottom: "160px",
    animation: "mymove22 1s ease-out infinite alternate",
    "@keyframes mymove22": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
});

export default Blog;
