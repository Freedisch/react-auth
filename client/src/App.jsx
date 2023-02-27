import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Headers from "./components/Headers";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Headers />
      <Home />
    </div>
  );
}

export default App;
