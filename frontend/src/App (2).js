import React, { useState, useEffect } from "react";
import { server } from "./config/config";
import Dashboard from "./components/Dashboard/Dashboard";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import "./App.css";
import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TMain from "./components/TMain";
import RMain from "./components/Retailer/RMain";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
  textColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
  textColor: "white",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [word, setWord] = useState("not working ...");
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("light");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleReq = async () => {
    // axios call
    const response = await axios.get(`${server}/api`, {
      params: {
        text: text,
      },
    });
    console.log(response);
    // setWord('working ...');
  };

  useEffect(() => {
    // handleReq();
  }, []);

  // const [sidebarOpen, setsidebarOpen] = useState(false);
  // const openSidebar = () => {
  //   setsidebarOpen(true);
  // };
  // const closeSidebar = () => {
  //   setsidebarOpen(false);
  // };

  return (
    // <ThemeProvider theme={themes[theme]}>
    //   <Dashboard theme={theme} setTheme={setTheme} />
    // </ThemeProvider>
    // <ThemeProvider theme={themes[theme]}>
    //   <div className="App">
    //     <Dashboard theme={theme} setTheme={setTheme} />
    //   </div>
    // </ThemeProvider>
    <Router>
      <Route exact path="/" component={TMain} />
      <Route path="/rmain" component={RMain} />
      {/* <div className="container1">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Main />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div> */}
    </Router>
  );
}

export default App;
