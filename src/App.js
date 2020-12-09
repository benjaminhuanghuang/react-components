import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reports" component={Reports} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
