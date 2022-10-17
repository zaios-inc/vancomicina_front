import React from 'react'
import Sidebar from '../sidebar';
import ParticlesBackground from '../particles';
import RegisterVancomycin from './registerVancomycin';
import Dashboard from '../dashboard';
import { useState } from 'react';

function Vancomycin() {

  const [enable, setEnable] = useState(false);

  return (
    <div>
      <div className='w-1/6'>
        <Sidebar />
      </div>
      <div className='pl-64'>
        <div style={{ background: 'linear-gradient(to right, #0097a7, #26c6da, #80deea, #26c6da, #0097a7)' }} >
          <div className='flex justify-center'>
            <RegisterVancomycin setEnable={setEnable} />
            <ParticlesBackground />
          </div>
          <div>
            {enable && <Dashboard />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vancomycin;
