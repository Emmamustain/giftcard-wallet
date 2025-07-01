import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import CardPage from "./pages/CardPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:cardId" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
