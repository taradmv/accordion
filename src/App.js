import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAccordion from "./accordion/MyAccordion";
import Acc from "./accordion/Acc";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accordion" element={<MyAccordion />} />
        <Route path="/acc" element={<Acc />} />
      </Routes>
    </Router>
  );
}

export default App;
