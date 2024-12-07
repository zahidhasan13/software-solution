import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./layout/Main.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
