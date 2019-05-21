import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import APODPage from "./pages/APODPage";
import Wrapper from "./components/Wrapper";

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path = "/" component={APODPage} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
