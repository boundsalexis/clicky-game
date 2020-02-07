import * as React from "react";
// import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Game from "./pages/Game";

const ScoreContext = React.createContext(0);
const HighscoreContext = React.createContext(0);

function App() {
  return (
    <ScoreContext.Provider value={0}>
   <Router>
     
         <Navbar></Navbar>
      <Wrapper>
        <Route exact path="/" component={Game}/>
      </Wrapper>
    </Router>
    </ScoreContext.Provider>

  );
}

export default App;
