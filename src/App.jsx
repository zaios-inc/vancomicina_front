import "./App.css";
import { useState } from "react";
import SignUp from "./components/signUp";
import Login from "./components/login";
import PatientRegistry from "./components/patientRegistry"
import Antibiotic from "./components/Antibiotic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {

	const [login, setLogin] = useState(false)

	return (
		<Router>
			<Routes>
				<Route exact path="/register" element={<SignUp/>}/>
				<Route exact path="/" element={<Login setLogin={setLogin}/>}/>
				{login && <Route exact path="/home" element={<Home/>}/>}
				{login && <Route exact path="/patient" element={<PatientRegistry />}/>}
				{login && <Route exact path="/antibiotic" element={<Antibiotic />}/>}
			</Routes>
	</Router>
	);
}

export default App;
