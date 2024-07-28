import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Summary from "./components/Summary/Summary";
import Language from "./components/Languages/Languages";
import Career from "./components/Career/Career";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Theme from "./components/Theme/Theme";
import Progress from "./components/Progress/Progress";

const App = () =>{
  return (
    <>
      <Theme />
      <Progress />
        <div className="wrapper">
          <Navigation/>
          <div className="container">
            <Home/>
            <Summary/>
            <Language/>
            <Career/>
            <About/>
            <Contact/>
            <Footer />
          </div>
        </div>
    </>
  )
}

export default App;