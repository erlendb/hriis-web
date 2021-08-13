import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Cabins from "./components/cabins/cabins";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <About />
          </Route>
          <Route path='/kontakt'>
            <Contact />
          </Route>
          <Route path ='/hytter'>
            <Cabins />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
