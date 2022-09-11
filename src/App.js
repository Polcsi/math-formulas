import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// Components
// Style Sheets

function App() {
  return (
    <>
      <Router>
        {/* Nav Here */}
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
