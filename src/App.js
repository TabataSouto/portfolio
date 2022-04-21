import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TrybeProjects from "./pages/projects/TrybeProjects";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/trybe-projects' component={ TrybeProjects } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
