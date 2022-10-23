import ParticlesBackground from './particles';
import Sidebar from './sidebar';
import ZaiosLogoNoBg from '../images/ZaiosLogoNoBg.png'

function Home() {
  return (
    <div>
      <Sidebar />

      <div className='lg:pl-64'>
        <div style={{ background: 'linear-gradient(to right, #261089, #6674ff, #9190ff, #6674ff, #261089)' }} >
          <div className='bg-no-repeat bg-center flex justify-center items-center' >
            <img src={ZaiosLogoNoBg} className='z-10'
              alt='Zaios logo'/>
            <ParticlesBackground />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
