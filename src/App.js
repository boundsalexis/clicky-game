import * as React from "react";
import { ConfigProvider } from "./configContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Game from "./pages/Game";
import Header from "./components/Header";

// const ScoreContext = React.createContext(0);
// const HighscoreContext = React.createContext(0);

function App() {
  return (
    <div className="div">
    <ConfigProvider>
    <Router>
    <Navbar/>
    <Header/>
    <Wrapper>
    <Route exact path="/" component={Game}/>
    </Wrapper>
    </Router>
    </ConfigProvider>
    </div>
  );
}

export default App;
