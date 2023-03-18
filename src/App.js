import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightBold: "500",
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />;
        {/* <Footer />; */}
      </ThemeProvider>
    </>
  );
};

export default App;
