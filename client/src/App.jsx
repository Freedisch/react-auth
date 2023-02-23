import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Headers from "./components/Headers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Headers />
    </div>
  );
}

export default App;
