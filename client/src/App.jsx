import Headers from "./components/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
