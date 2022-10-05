import { useState } from 'react'

function Antibiotic() {

    const [max1, setMax1] = useState(0)
    const [max2, setMax2] = useState(0)
    const [max3, setMax3] = useState(0)
    const [min1, setMin1] = useState(0)
    const [min2, setMin2] = useState(0)
    const [min3, setMin3] = useState(0)
    const [recomended1, setRecomended1] = useState('')
    const [recomended2, setRecomended2] = useState('')
    const [recomended3, setRecomended3] = useState('')
    const [antibiotic, setAntibiotic] = useState('')

    function handleSubmit() {
        console.log(typeof max1)
    }

    return (
        <div className="antialiased flex text-gray-900" style={{ background: 'linear-gradient(to right, #261089, #533eab, #9190ff, #6674ff, #261089)' }}>
            <form className="bg-white border px-4 rounded-t-xl rounded-b-xl shadow-2xl relative mx-auto max-w-2xl w-full my-32 inputs space-y-6">
                <h1 className="text-2xl font-bold mt-3 uppercase">Ingresar <span className='text-blue-700'>Antibiotico</span></h1>
                    <div className="flex">
                        <div className="w-full justify-center text-center items-center">
                            <label className='uppercase '>Nombre Antibiotico:</label>
                                <input
                                className="border border-gray-400 drop-shadow-lg px-4 py-1 m-auto mb-3 mt-3 mx-2 w-1/2 rounded focus:outline-none focus:border-blue-700"
                                type="text"
                                value={antibiotic}
                                onChange={(e) => {setAntibiotic(e.target.value)}}
                                />
                        </div>
                    </div>
                <div className="flex space-x-2">
                    <div className="w-1/5 justify-center text-center items-center">
                        <label>Minimo</label>
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 mt-3 w-1/2 rounded focus:outline-none focus:border-blue-700"
                            type="number"
                            value={min1}
                            onChange={(e) => {setMin1(e.target.value)}}
                            />
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 w-1/2 rounded focus:outline-none focus:border-blue-700"
                            type="number"
                            value={min2}
                            onChange={(e) => {setMin2(e.target.value)}}
                            />
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto w-1/2 rounded focus:outline-none focus:border-blue-700"
                            type="number"
                            value={min3}
                            onChange={(e) => {setMin3(e.target.value)}}
                            />
                    </div>
                    <div className="w-1/5 justify-center text-center items-center ">
                        <label>Maximo</label>
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 mt-3 w-1/2 rounded focus:outline-none focus:border-blue-700"
                            type="number"
                            value={max1}
                            onChange={(e) => {setMax1(e.target.value)}}
                            />
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto mb-3 w-1/2 rounded focus:outline-none focus:border-blue-700"
                            type="number"
                            value={max2}
                            onChange={(e) => {setMax2(e.target.value)}}
                            />
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-2 py-2 m-auto w-1/2 rounded focus:outline-none focus:border-blue-700"
                            type="number"
                            value={max3}
                            onChange={(e) => {setMax3(e.target.value)}}
                            />
                    </div>
                    <div className="w-1/2">
                        <label>Recomendacion</label>
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-4 py-2 w-full mt-3 mb-3 rounded focus:outline-none focus:border-blue-700"
                            type="text"
                            value={recomended1}
                            onChange={(e) => {setRecomended1(e.target.value)}}
                            />
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-4 py-2 w-full m-auto mb-3 rounded focus:outline-none focus:border-blue-700"
                            type="text"
                            value={recomended2}
                            onChange={(e) => {setRecomended2(e.target.value)}}
                            />
                            <input
                            className="block border border-gray-400 drop-shadow-lg px-4 py-2 w-full m-auto mb-4 rounded focus:outline-none focus:border-blue-700"
                            type="text"
                            value={recomended3}
                            onChange={(e) => {setRecomended3(e.target.value)}}
                            />
                    </div>
                </div>
                <div class="text-center pt-1 pb-1 mt-8">
                    <button
                        className="inline-block px-6 py-5 m-auto text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-10"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={handleSubmit}
                        style={{ background: 'linear-gradient(to right, #261089, #533eab, #6674ff, #533eab, #261089)' }}
                        >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Antibiotic

/**
 *  objeto = {
 *   min1: valor
 *   max1: valor
 *   recomended1: valor
 *   min2: valor
 * 
 * }
 */