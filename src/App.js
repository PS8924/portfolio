import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Summary from "./components/Summary/Summary";
import Language from "./components/Languages/Languages";

const App = () =>{
  return (
    <>
      <div className="container">
        <Navigation/>
        <Home/>
        <Summary/>
        <Language/>
      </div>
    </>
  )
}

export default App;