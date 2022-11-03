import React from "react";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import { Home } from "./components/Home";
import { Number } from "./components/Number"




function App() {
  return (
    <div>
      <h1>This should not reRender</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:option" element={<Number />} />
        {/* <Route path="/:word" element={<Word />} /> */}

      </Routes>
    </div>
  );
}
    
export default App
