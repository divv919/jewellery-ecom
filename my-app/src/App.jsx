import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import SnackBar from "./components/SnackBar.jsx/SnackBar";
import SnackBarContext from "./components/SnackBarContext/SnackBarContext";
function App() {
  const [snackBar, setSnackBar] = useState({
    message: "",
    visible: false,
    variant: "",
  });
  useEffect(() => {
    if (snackBar.visible) {
      const timer = setTimeout(() => {
        setSnackBar({ message: "", visible: false, variant: "success" });
      }, 4000);
      console.log("SnackBar triggered timeout");
      return () => clearTimeout(timer);
    }
  }, [snackBar]);
  function enableSnackBar(message, variant) {
    setSnackBar({ message: message, visible: true, variant: variant });
  }

  return (
    <SnackBarContext.Provider value={{ enableSnackBar }}>
      <ScrollToTop />
      <Navbar />
      <div style={{ minHeight: "70vh" }}>
        <Outlet />
      </div>
      {snackBar.visible && (
        <SnackBar message={snackBar.message} variant={snackBar.variant} />
      )}
      <Footer />
    </SnackBarContext.Provider>
  );
}

export default App;
