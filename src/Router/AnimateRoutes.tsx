import AboutPage from "@/Pages/AboutPage";
import HomePage from "@/Pages/HomePage";
import RootLayout from "@/Pages/RootLayout";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import PageWrapper from "./PageWrapper";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;