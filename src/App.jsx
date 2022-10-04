import "./App.css";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Select from "./components/Select";
import Patient from "./components/Patient";
import Antibiotic from "./components/Antibiotic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<SignUp/>}/>
        <Route exact path="/select" element={<Select />}/>
        <Route exact path="/patient" element={<Patient />}/>
        <Route exact path="/antibiotic" element={<Antibiotic />}/>
      </Routes>
    </Router>
  );
}

export default App;
