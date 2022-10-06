import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { FaHospitalUser } from 'react-icons/fa'
import { GiMedicines } from 'react-icons/gi'
import { MdAccountCircle } from 'react-icons/md'

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState('-left-64');

  return (
    <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-2xl shadow-[#9190ff] bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="https://zaios.com.co"
                        target="_blank"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <div className="text center font-bold text-xl">Monitoreo de fármacos</div>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/home"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                  <div className="flex items-center">
                                    <div className="text-2xl">
                                      <AiFillHome />
                                    </div>
                                    <p className="text-lg pl-3 text-black text-center">Inicio</p>
                                  </div>
                                </NavLink>
                            </li>

                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/patient"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                  <div className="flex items-center">
                                    <div className="text-2xl">
                                      <FaHospitalUser />
                                    </div>
                                    <p className="text-lg pl-3 text-black text-center">Paciente</p>
                                  </div>
                                </NavLink>
                            </li>

                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/antibiotic"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                  <div className="flex items-center">
                                    <div className="text-2xl">
                                      <GiMedicines />
                                    </div>
                                    <p className="text-lg pl-3 text-black text-center">Antibióticos</p>
                                  </div>
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <NavLink
                                    to="/cuenta"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-bold px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                <div className="mx-auto">
                                  <div className="flex flex-col mx-auto items-center">
                                    <div className="text-5xl">
                                      <MdAccountCircle />
                                    </div>
                                    <p className="text-xl text-center font-semibold text-black">Cuenta</p>
                                  </div>
                                </div>
                                
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
  );
}

export default Sidebar;
