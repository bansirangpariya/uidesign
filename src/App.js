import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Progress from "./Progress";
import Purple from "./Purple";
import Feedback from "./Feedback";
import Blog from "./Blog";
import Form from "./Form";
import Footer from "./Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Progress />
      <Purple />
      <Feedback />
      <Blog />
      <Form />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
