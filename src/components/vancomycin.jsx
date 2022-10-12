import React from 'react'
import Sidebar from './sidebar';
import ParticlesBackground from './particles';
import ChartLine from './chartline';
import RegisterVancomycin from './registerVancomycin';

function Vancomycin() {
  return (
    <div>
      <div className='w-1/6'>
        <Sidebar />
      </div>

      <div className='pl-64'>
        <div style={{ background: 'linear-gradient(to right, #0097a7, #26c6da, #80deea, #26c6da, #0097a7)' }} >
          <div className='flex justify-center'>
            <RegisterVancomycin />
          </div>

          <div className=''>
            <ChartLine />
          </div>
          <ParticlesBackground />
        </div>
      </div>
    </div>
  )
}

export default Vancomycin;
