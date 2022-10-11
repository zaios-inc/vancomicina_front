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
        <div style={{ background: 'linear-gradient(to right, #261089, #6674ff, #9190ff, #6674ff, #261089)' }} >
          <div style={{ backgroundImage: 'url(https://i.ibb.co/kgvsYPX/Zaios-Logo-nobg.png)' }} className='bg-no-repeat bg-center' >
            <ParticlesBackground />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
