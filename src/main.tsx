import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Exercise from "./Exercise";
import UTS from "./UTS";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Exercise /> */}
    <UTS />
  </StrictMode>,
);
