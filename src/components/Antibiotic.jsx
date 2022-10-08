import { useState } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import ParticlesBackground from './particles'
import Error from './error'

function Antibiotic() {

  const [max1, setMax1] = useState('')
  const [max2, setMax2] = useState('')
  const [max3, setMax3] = useState('')
  const [min1, setMin1] = useState('')
  const [min2, setMin2] = useState('')
  const [min3, setMin3] = useState('')
  const [recomended1, setRecomended1] = useState('')
  const [recomended2, setRecomended2] = useState('')
  const [recomended3, setRecomended3] = useState('')
  const [antibiotic, setAntibiotic] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  function createAntibiotic() {

    if ([min1, min2, max1, max2, recomended1, recomended2].includes('')) {
          setMessage('Diligienciar al menos dos recomendaciones')
          setError(true)
          return;
      }
    setError(false)
    const newantibiotic = {
      name: antibiotic,
      min1: parseInt(min1),
      max1: parseInt(max1),
      recomended1,
      min2: parseInt(min2),
      max2: parseInt(max2),
      recomended2,
      min3: parseInt(min3),
      max3: parseInt(max3),
      recomended3
    }
    axios.post('/antibiotic/create', newantibiotic)
      .then(res => {
        alert(res.data)
      })
      .then(err => { console.log(err) })

    setAntibiotic('')
    setMax1('')
    setMax2('')
    setMax3('')
    setMin1('')
    setMin2('')
    setMin3('')
    setRecomended1('')
    setRecomended2('')
    setRecomended3('')
  }

  return (
    <div >
      <div className='w-1/6'>
        <Sidebar />
      </div>
      <div>
        <div className="antialiased flex text-gray-900" style={{ background: 'linear-gradient(to right, #261089, #533eab, #9190ff, #6674ff, #261089)' }}>
          <div className="container bg-white border px-4 rounded-t-xl rounded-b-xl shadow-2xl relative mx-auto max-w-2xl w-full my-32  inputs space-y-6 z-10">
            <h1 className="text-2xl font-bold mt-3 uppercase">Ingresar <span className='text-blue-700'>Antibiotico</span></h1>
            <div className="flex">
              <div className="w-full justify-center text-center items-center">
                <label className='uppercase '>Nombre Antibiotico:</label>
                <input
                  className="border border-gray-400 drop-shadow-lg px-4 py-1 m-auto mb-3 mt-3 mx-2 w-1/2 rounded focus:outline-none focus:border-blue-700"
                  type="text"
                  placeholder='Cefazolina'
                  value={antibiotic}
                  onChange={(e) => { setAntibiotic(e.target.value) }}
                />
              </div>
            </div>
            <div className='w-2/5 text-center'>
              Niveles de Clearance
            </div>
            <form className="container flex space-x-2 ">
              <div className="w-1/5 justify-center text-center items-center pl-10">
                <label>Minimo</label>
                <input
                  className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 mt-3 w-3/4 text-center rounded focus:outline-none focus:border-blue-700"
                  type="number"
                  placeholder='50'
                  value={min1}
                  onChange={(e) => { (setMin1(e.target.value)) }}
                />
                <input
                  className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 w-3/4 text-center rounded focus:outline-none focus:border-blue-700"
                  type="number"
                  placeholder='10'
                  value={min2}
                  onChange={(e) => { setMin2((e.target.value)) }}
                />
                <input
                  className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto w-3/4 text-center rounded focus:outline-none focus:border-blue-700"
                  type="number"
                  placeholder='0'
                  value={min3}
                  onChange={(e) => { setMin3(e.target.value) }}
                />
              </div>
              <div className="w-1/5 justify-center text-center items-center pr-10">
                <label>Maximo</label>
                <input
                  className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 mt-3 w-3/4 text-center rounded focus:outline-none focus:border-blue-700"
                  type="number"
                  placeholder='200'
                  value={max1}
                  onChange={(e) => { setMax1(e.target.value) }}
                />
                <input
                  className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 w-3/4 text-center rounded focus:outline-none focus:border-blue-700"
                  type="number"
                  placeholder='50'
                  value={max2}
                  onChange={(e) => { setMax2(e.target.value) }}
                />
                <input
                  className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto w-3/4 text-center rounded focus:outline-none focus:border-blue-700"
                  type="number"
                  placeholder='10'
                  value={max3}
                  onChange={(e) => { setMax3(e.target.value) }}
                />
              </div>
              <div className="w-1/2 pr-10">
                <label>Recomendacion</label>
                <input
                  className="block border border-gray-400 drop-shadow-lg px-4 py-2 w-full mt-3 mb-3 rounded focus:outline-none focus:border-blue-700"
                  type="text"
                  placeholder='1 a 2 g EV cada 8 hrs'
                  value={recomended1}
                  onChange={(e) => { setRecomended1(e.target.value) }}
                />
                <input
                  className="block border border-gray-400 drop-shadow-lg px-4 py-2 w-full m-auto mb-3 rounded focus:outline-none focus:border-blue-700"
                  type="text"
                  placeholder='1 a 2 g EV cada 12 hrs'
                  value={recomended2}
                  onChange={(e) => { setRecomended2(e.target.value) }}
                />
                <input
                  className="block border border-gray-400 drop-shadow-lg px-4 py-2 w-full m-auto mb-4 rounded focus:outline-none focus:border-blue-700"
                  type="text"
                  placeholder='2g EV cada 24 hrs'
                  value={recomended3}
                  onChange={(e) => { setRecomended3(e.target.value) }}
                />
              </div>
            </form>
            {error && <Error message={message}/>}
            <div class="text-center pt-1 pb-1 mt-8">
              <button
                className="inline-block px-6 py-5 m-auto text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-10"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={createAntibiotic}
                style={{ background: 'linear-gradient(to right, #261089, #533eab, #6674ff, #533eab, #261089)' }}
              >
                Registrar
              </button>
            </div>
          </div>
          <ParticlesBackground />
        </div>
      </div>
    </div>

  )
}

export default Antibiotic
