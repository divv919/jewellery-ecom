import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router.jsx'
import setupLocatorUI from "@locator/runtime";


if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById('root')).render(
    <AppRouter />
)
