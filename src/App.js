import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/mywork" element={<Experience />} />
          <Route exact path="/contactme" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
