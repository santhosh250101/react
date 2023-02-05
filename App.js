// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from "react";
import  ReactDOM  from "react-dom/client";

const heading =(
  <h1>
    <h2>Hello world React Element</h2>
  </h1>
)
const HeaderComponent = ()=>{
  return(
    <div>
      <h1>Hello world</h1>
      {heading}
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);
/*
React Components
1.Functional (new way)
Component names start with capital

2.Class based (old way)


At the end of the day, HeadeComponent is a normal javascript
function 
*/