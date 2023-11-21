import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
