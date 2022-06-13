import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home";
import { Temtems } from "./pages/temtems/Temtems";
import "./App.css"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/temtems" element={<Temtems/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
