import StyledApp from "./Components/App.styled";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
      <Home />
      <StyledApp>Hello World!</StyledApp>
    </div>
  );
}

export default App
