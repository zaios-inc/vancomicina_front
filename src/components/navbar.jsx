import ZaiosLogo from '../images/ZaiosLogo.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { backendString } from "./backendConnection";

function Navbar() {
    const menu = document.getElementById('menu');
    const [show, setShow] = useState(false);

    function showBar() {
        console.log(show)
        if (show === false) {
            setShow(true)
            menu.className = 'w-full md:block md:w-auto hidden';
        } else {
            setShow(false)
            menu.className = 'w-full md:block md:w-auto';
        }
    }

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 md:hidden">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://zaios.com.co" className="flex items-center">
                    <img src={ZaiosLogo} className="mr-3 h-6 sm:h-9" alt="Zaios Logo" />
                </a>
                <button id='boton' onClick={showBar} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                </button>
            </div>
            <div id='menu' className="w-full md:block md:w-auto hidden">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href={`${backendString}/vancomicina_front/home`} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Inicio</a>
                    </li>
                    <li>
                        <a href={`${backendString}/vancomicina_front/listAntibotics`} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Antibióticos</a>
		            </li>
                    <li>
                        <a href={`${backendString}/vancomicina_front/patient`} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Paciente</a>
                    </li>
                    <li>
                        <a href={`${backendString}/vancomicina_front/vancomycin`} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Vancomicina</a>
                    </li>
                    <li>
                        <NavLink
                            to='/edituser'
                            exact
                            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            <P>Mi perfil</P>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;