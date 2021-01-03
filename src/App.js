import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/pages/HomePage/HomePage";
import AboutPage from "./containers/pages/AboutPage/AboutPage";
import ContactPage from "./containers/pages/ContactPage/ContactPage";
import Posts from "./containers/pages/Posts/Posts";
import TestUsers from "./containers/pages/Users/Users";
import Github from "./containers/pages/Github/Github";
import UserPage from "./components/users/UserPage";
import ContextPage from "./containers/pages/ContextPage/ContextPage";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/posts" component={Posts} />
        <Route path="/testUsers" component={TestUsers} />
        <Route path="/github" component={Github} />
        <Route path="/users" component={UserPage} />
        <Route path="/context" component={ContextPage} />
      </Router>
    </>
  );
}

export default App;
