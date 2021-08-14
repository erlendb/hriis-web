import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cabins from "./components/Cabins/Cabins";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route exact path='/kontakt'>
            <Contact />
          </Route>
          <Route exact path ='/hytter'>
            <Cabins />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
