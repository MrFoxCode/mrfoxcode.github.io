import React from "react";
import Searchlogo from "../images/searchicon.png";


function Navbar(){

     //Click function in Searhbar
     const searchButton = () =>{
        console.log("clicked");
        document.getElementById('searchinput').value ="";   
       };
    
    return(
        <div className="navbar">
            
            <ul>
                <li><a id="nav-home">Home</a></li>
                <li><a id="nav-about">About</a></li>
                <li><a id="nav-recipes">Recipes</a></li>
                <li><a id="nav-yourlist">Your List</a></li>
            </ul>

            <div className="burgerbar">
                <a id="burger1"></a>
                <a id="burger2"></a>
                <a id="burger3"></a>            
            </div>
            
            <div className="searchbar">
                <input type="text" id="searchinput" placeholder="Search"></input>
                <button onClick={searchButton} type="submit"> <img src={Searchlogo}/></button>           
            </div>
        </div>
        
    );   
}


export default Navbar;