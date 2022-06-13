import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home";
import { Temtems } from "./pages/temtems/Temtems";
import "./App.css"

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/temtems" element={<Temtems/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
