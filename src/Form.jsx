import {
  Container,
  Grid,
  Typography,
  IconButton,
  Card,
  Input,
  Button,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

const Form = () => {
  return (
    <>
      <MainStyle>
        <Container className="mainContainer">
          <Typography className="title">Get in Touch</Typography>
          <Typography className="heading">
            Any Questions? Feel Free to Contact
          </Typography>
          <Grid container xs={12} spacing={5} className="gridContainer">
            <Grid item lg={4}>
              <Card className="cardContainer">
                <Box className="mainBox">
                  <Box>
                    <IconButton className="iconBtn1">
                      <img
                        src="https://html.designingmedia.com/folioflix/assets/image/location-icon.png"
                        alt="location"
                        className="cardImg"
                      />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography className="cardTitle">Address:</Typography>
                    <Typography className="cardDetail">
                      121 King Street Melbourne,<br></br> 3000, Australia
                    </Typography>
                  </Box>
                </Box>
                <Box className="mainBox">
                  <Box>
                    <IconButton className="iconBtn1">
                      <img
                        src="https://html.designingmedia.com/folioflix/assets/image/message-icon.png"
                        alt="location"
                        className="cardImg"
                      />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography className="cardTitle">Email:</Typography>
                    <Typography className="cardDetail">
                      Info@folioflix.com <br></br>folioflix@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box className="mainBox">
                  <Box>
                    <IconButton className="iconBtn1">
                      <img
                        src="https://html.designingmedia.com/folioflix/assets/image/phone-icon.png"
                        alt="location"
                        className="cardImg"
                      />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography className="cardTitle">Phone:</Typography>
                    <Typography className="cardDetail">
                      +61 3 8376 6284<br></br> +800 2345 6789
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item lg={8} sx={{ width: "760px" }}>
              <Box className="inputBox">
                <Box>
                  <Input
                    placeholder="Name"
                    disableUnderline={true}
                    className="textField"
                  ></Input>
                </Box>
                <Box>
                  <Input
                    placeholder="Email"
                    disableUnderline={true}
                    className="textField"
                  ></Input>
                </Box>
              </Box>
              <Box className="inputBox">
                <Box>
                  <Input
                    placeholder="Phone"
                    disableUnderline={true}
                    className="textField"
                  ></Input>
                </Box>
                <Box>
                  <Input
                    placeholder="Subject"
                    disableUnderline={true}
                    className="textField"
                  ></Input>
                </Box>
              </Box>
              <Box>
                <Input
                  placeholder="Message"
                  disableUnderline={true}
                  className="textField1"
                ></Input>
              </Box>
              <Button className="SubmiteBtn">Submite</Button>
            </Grid>
          </Grid>
        </Container>
        <img
          src="https://html.designingmedia.com/folioflix/assets/image/corn-left-icon.png"
          alt="curnImg"
          className="curnImg"
        />
      </MainStyle>
    </>
  );
};
const MainStyle = styled(Box)({
  padding: "120px 0",
  position: "relative",
  "& .curnImg": {
    position: "absolute",
    bottom: "260px",
    right: "161px",
    animation: "rotet 1s ease-out infinite alternate",
    "@keyframes rotet": {
      "0%": { transform: "translateY(0px)" },
      "100%": { transform: "translateY(-20px)" },
    },
  },
  "& .SubmiteBtn": {
    height: "61px",
    width: "193px",
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
    "@media(max-width: 660px)": {
      display: "none",
    },
    "&:hover": {
      background: "#6f34fe",
      transform: "translateY(-8px)",
    },
  },
  "& .textField1": {
    display: "block",
    width: "730px",
    height: "148px",
    background: "#fefeff",
    border: "none",
    boxShadow: "0 0 85px 0 #e9eefc",
    fontSize: "16px",
    color: "black",
    padding: "15px 30px",
    borderRadius: "30px",
    fontFamily: "'Lato', sans-serif",
    marginBottom: "23px",
  },
  "& .textField": {
    width: "350px",
    background: "#fefeff",
    border: "none",
    boxShadow: "0 0 85px 0 #e9eefc",
    fontSize: "16px",
    color: "#847F91",
    padding: "15px 30px",
    borderRadius: "30px",
    fontFamily: "'Lato', sans-serif",
    marginBottom: "23px",
  },
  "& .inputBox": {
    display: "flex",
    gap: 25,
  },
  "& .cardImg": {
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
  },
  "& .mainBox:hover .cardImg": {
    transform: "translateY(-8px)",
  },
  "& .gridContainer": {
    marginTop: "50px",
  },
  "& .cardDetail": {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "22px",
    fontFamily: "'Lato', sans-serif",
    color: "#ffffff",
    textAlign: "left",
  },
  "& .cardTitle": {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "1.2px",
    color: "#ffffff",
    marginBottom: "14px",
  },
  "& .mainBox": {
    display: "flex",
    padding: "20px 0 20px",
    gap: 25,
  },
  "& .iconBtn1": {
    background: "#FCA61F",
    height: "60px",
    width: "60px",
    padding: 10,
  },
  "& .cardContainer": {
    background: "#733AFE",
    padding: "35px 51px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  "& .mainContainer": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .title": {
    color: "#6F34FE",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "24px",
    marginBottom: "14px",
  },
  "& .heading": {
    width: "55%",
    color: "#3F396D",
    fontWeight: 700,
    fontSize: "52px",
    lineHeight: "54px",
    textAlign: "center",
    marginBottom: "0 !important",
  },
});

export default Form;
