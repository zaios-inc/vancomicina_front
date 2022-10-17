import './App.css';
import { useState } from 'react';
import SignUp from './components/signUp';
import Login from './components/login';
import PatientRegistry from './components/patientRegistry'
import Antibiotic from './components/antibioticComponents/Antibiotic';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Vancomycin from './components/vancomycin/mainVancomycin';
import Table from './components/antibioticComponents/tableAntibiots';
import EditAntibiotic from './components/antibioticComponents/editAntibiotic';

function App() {

	const [login, setLogin] = useState(true)

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route exact path='/register' element={<SignUp />} />
				<Route exact path='/' element={<Login setLogin={setLogin} />} />
				{login && <Route exact path='/home' element={<Home />} />}
				{login && <Route exact path='/patient' element={<PatientRegistry />} />}
				{login && <Route exact path='/listAntibotics' element={<Table />} />}
				{login && <Route exact path='/antibiotic' element={<Antibiotic />} />}
				{login && <Route exact path='/vancomycin' element={<Vancomycin />} />}
				{login && <Route exact path='/editAntibiotic/:_id' element={<EditAntibiotic />} />}
			</Routes>
		</Router>
	);
}

export default App;
