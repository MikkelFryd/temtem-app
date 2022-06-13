import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home";
import { Temtems } from "./pages/temtems/Temtems";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/temtems" element={<Temtems/>}/>
        <Route exact path="/" element={<Home/>}>
          <Route exact path="/home" element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
