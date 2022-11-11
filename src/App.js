import "./App.css";
import React from "react";
import DropDown from "./components/DropDown";
function App() {
  let option1 = [
    "oliver",
    "hanson",
    "van",
    "henry",
    "april",
    "tucker",
    "ralph",
    "hubbard",
    
  ];
  let option2 = [
    "twenty",
    "twenty one",
    "twenty one and a half",
    "twenty seven and three fourths",
  ];
  let option3 = [
    "oliver",
    "hanson",
    "van",
    "henry",
    "april",
    "tucker",
    "ralph",
    "hubbard",
    "1oliver",
    "1hanson",
    "1van",
    "1henry",
    "1april",
    "1tucker",
    "1ralph",
    "1hubbard",
    "2oliver",
    "2hanson",
    "2van",
    "2henry",
    "2april",
    "2tucker",
    "2ralph",
    "2hubbard",
    "3oliver",
    "3hanson",
    "3van",
    "3henry",
    "3april",
    "3tucker",
    "3ralph",
    "3hubbard",
    
  ];
  
    return (
      <div className="App" style={{display: 'flex'}}>
        <DropDown label={"Select Name"} options={option3} multiSelect={true}/>
        <DropDown label={"Age Dropdown"} options={option2} multiSelect={false}/>
      </div>
    );
  }


export default App;
