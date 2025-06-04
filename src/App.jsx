import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./about";
import Contact from "./contact";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
