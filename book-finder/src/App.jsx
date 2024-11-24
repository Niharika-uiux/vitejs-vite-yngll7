import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import MagnifyingTextEffect from "./Component/MagnifyingTextEffect"; 
function App() {
  return (
    <div className="min-h-screen bg-blue-100">
     
      <MagnifyingTextEffect />
      <Home />
      
    </div>
  );
}

export default App;
