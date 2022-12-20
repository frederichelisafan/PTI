import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Game from "./components/Game";
import About from "./about";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
