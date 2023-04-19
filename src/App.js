import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About  from "./pages/about/about";
import Projects from "./pages/projects/projects";
// import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightBold: "500",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#F0F0F0",
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
          {/* <Footer />; */}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
