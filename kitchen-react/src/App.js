import React from "react";
import Navbar from "./components/Navbar";
import Slides from "./components/slide1";
import RecipesMain from "./components/recipes";
import './App.css';
import Footermain from "./components/footer";

function App(){
//-------------
  return(    
      <div>
        <Navbar />        
        <Slides />
        <RecipesMain />
        <Footermain />        
      </div>
  );


}


export default App;