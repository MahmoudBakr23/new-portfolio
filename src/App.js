import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from "./Components/Education";
import Experience from "./Components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/mywork" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
