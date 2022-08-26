import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
