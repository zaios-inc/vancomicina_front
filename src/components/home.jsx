import ParticlesBackground from './particles';
import Sidebar from './sidebar';
import Navbar from './navbar';
import ZaiosLogoNoBg from '../images/ZaiosLogoNoBg.png'

function Home() {
  return (
    <div>
      <Sidebar />
      <Navbar />

      <div className='lg:pl-64'>
        <div style={{ background: 'linear-gradient(to right, #261089, #6674ff, #9190ff, #6674ff, #261089)' }}
          className='h-screen flex justify-center items-center' >
          <div className='bg-no-repeat bg-center flex' >
            <img src={ZaiosLogoNoBg} className='z-10'
              alt='Zaios logo' />
            <ParticlesBackground />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
