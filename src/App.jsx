import "./App.css";
import SignUp from "./components/signUp";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
