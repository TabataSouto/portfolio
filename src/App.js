import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TrybeProjects from "./pages/projects/TrybeProjects";
import PersonalProjects from "./pages/projects/PersonalProjects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/trybe-projects' component={ TrybeProjects } />
        <Route path='/personal-projects' component={ PersonalProjects } />
        <Route path='/contact' component={ Contact } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
