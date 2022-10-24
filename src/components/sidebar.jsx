import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { backendString } from './backendConnection'
import axios from 'axios';

function Sidebar() {
  const [showSidebar] = useState('-left-64');
  const [user, setUser] = useState([])

  useEffect(() => {
  axios.get(`${backendString}/user/getlogin`).then(res => {
    setUser(res.data)
  })
  }, [])

  return (
    <div
      className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-2xl shadow-[#212121] bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
    >
      <div className='flex-col items-stretch min-h-full flex-nowrap px-0 relative'>
        <a
          href='https://zaios.com.co'
          target='_blank'
          rel='noreferrer'
          className='mt-2 text-center w-full inline-block'
        >
          <div className='text center font-black text-xl select-none'>Monitoreo de fármacos</div>
        </a>
        <div className='flex flex-col'>
          <hr className='my-4 min-w-full' />

          <ul className='flex-col min-w-full flex list-none'>
            <li className='rounded-lg mb-4'>
              <NavLink
                to='/home'
                exact
                className='flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg hover:bg-[#9190ff]'
              >
                <div className='flex items-center'>
                  <div className='text-2xl'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3209/3209074.png' className='w-8'
                      alt='Icono inicio' />
                  </div>
                  <p className='text-lg pl-3 text-black text-center select-none'>Inicio</p>
                </div>
              </NavLink>
            </li>

            <li className='rounded-lg mb-4'>
              <NavLink
                to='/listAntibotics'
                exact
                className='flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg hover:bg-[#9190ff]'
              >
                <div className='flex items-center'>
                  <div className='text-2xl'>
                    <img src='https://cdn-icons-png.flaticon.com/512/822/822092.png' className='w-8'
                      alt='Icono antibióticos'/>
                  </div>
                  <p className='text-lg pl-3 text-black text-center select-none'>Antibióticos</p>
                </div>
              </NavLink>
            </li>

            <li className='rounded-lg mb-4'>
              <NavLink
                to='/patient'
                exact
                className='flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg hover:bg-[#9190ff]'
              >
                <div className='flex items-center'>
                  <div className='text-2xl'>
                    <img src='https://cdn-icons-png.flaticon.com/512/2718/2718083.png' className='w-9' 
                      alt='Icono paciente'/>
                  </div>
                  <p className='text-lg pl-3 text-black text-center select-none'>Paciente</p>
                </div>
              </NavLink>
            </li>

            <li className='rounded-lg mb-4'>
              <NavLink
                to='/vancomycin'
                exact
                className='flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg hover:bg-[#9190ff]'
              >
                <div className='flex items-center'>
                  <div className='text-2xl'>
                    <img src='https://cdn-icons-png.flaticon.com/512/4148/4148500.png' className='w-8' 
                      alt='Icono inyección'/>
                  </div>
                  <p className='text-lg pl-3 text-black text-center select-none'>Vancomicina</p>
                </div>
              </NavLink>
            </li>
          </ul>

          <ul className='flex-col min-w-full flex list-none absolute bottom-0'>
            <NavLink
              to='/edituser'
              exact
              className='flex items-center gap-4 text-sm text-gray-700 font-bold px-4 py-3 rounded-lg'
            >
              <div className='mx-auto'>
                <div className='flex flex-col mx-auto items-center'>
                  <div className='text-5xl'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3033/3033143.png' className='w-11'
                      alt='Icono cuenta' />
                  </div>
                  <p className='text-xl text-center font-semibold text-black select-none'>{user.name}</p>
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
