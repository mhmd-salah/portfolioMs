import {  Route, Router, Routes, useLocation } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import AnimatedRoutes from "./Router/AnimateRoutes";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <AnimatedRoutes />
    </>
  );
}

export default App;
