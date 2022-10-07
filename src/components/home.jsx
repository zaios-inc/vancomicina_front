import React from 'react'
import ParticlesBackground from './particles';
import Sidebar from './sidebar';

function Home() {
  return (
    <div>
      <div className='w-1/6'>
        <Sidebar />
      </div>
      <div className='pl-64'>
        <ParticlesBackground />
      </div>
    </div>
  )
}

export default Home;
