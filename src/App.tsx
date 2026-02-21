import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
