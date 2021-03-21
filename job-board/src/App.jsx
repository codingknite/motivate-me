import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f8f9fa;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
