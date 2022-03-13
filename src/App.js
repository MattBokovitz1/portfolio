import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Books from "./components/books/Books";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/books" component={Books} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
