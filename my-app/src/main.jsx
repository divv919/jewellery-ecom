import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router.jsx";
// import setupLocatorUI from "@locator/runtime";

createRoot(document.getElementById("root")).render(<AppRouter />);
