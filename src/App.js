import React, { useState } from "react";
// import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Game from "./pages/Game";

function App() {

  const [gameState, setGameState] = useState({
    highscore: 0,
    currentscore: true,
    clickedIcons: [],
    icons: []
  });
  return (
    <Router>
         <Navbar></Navbar>
      <Wrapper>
        <Route exact path="/" component={Game}/>
      </Wrapper>
    </Router>
  );
}

export default App;
