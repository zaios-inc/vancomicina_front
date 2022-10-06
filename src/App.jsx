import "./App.css";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Select from "./components/Select";
import PatientRegistry from "./components/patientRegistry"
import Antibiotic from "./components/Antibiotic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<SignUp/>}/>
      <Route exact path="/select" element={<Select />}/>
      <Route exact path="/patient" element={<PatientRegistry />}/>
      <Route exact path="/antibiotic" element={<Antibiotic />}/>
    </Routes>
  </Router>
  );
}

export default App;
