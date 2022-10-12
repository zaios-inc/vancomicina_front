import React from 'react'
import Sidebar from './sidebar';
import ParticlesBackground from './particles';
import ChartLine from './chartline';

function Vancomycin() {
  return (
    <div>
      <div className='w-1/6'>
        <Sidebar />
      </div>

      <div className='pl-64'>
        <div style={{ background: 'linear-gradient(to right, #00acc1, #4dd0e1, #80deea, #4dd0e1, #00acc1)' }} >
          <ChartLine />
          <ParticlesBackground />
        </div>
      </div>
    </div>
  )
}

export default Vancomycin;
