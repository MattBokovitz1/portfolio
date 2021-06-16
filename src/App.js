import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
