import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from "./Components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<About />} />
          <Route exact path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
