import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Essays from "./components/essays/Essays";
import Books from "./components/books/Books";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/essays" component={Essays} />
            <Route path="/books" component={Books} />
          </Switch>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
