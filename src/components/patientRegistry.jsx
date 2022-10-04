import React from 'react'

function PatientRegistry() {
  return (
    <div class="min-h-screen py-40" style={{ background: 'linear-gradient(to right, #261089, #533eab, #9190ff, #6674ff, #261089)' }}>
      <div class="flex flex-col md:w-1/4 pr-4 pl-4 text-center items-center text-white">
          <h3 class="text-3xl font-bold">Bienvenido</h3>
          <p>Pilas porque no sé que poner aquí</p><br />
          <img
            src=""
            alt=""
            >
          </img>
          <button
            type="button"
            class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-2xl shadow-md hover:bg-blue-700 pulse 1s; focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3"
            style={{ background: 'linear-gradient(to right, #00dfc3, #533eab, #9190ff, #6674ff, #261089)' }}
          >
            Atrás
          </button>
      </div>
      <div class="container mx-auto">
        <div class="bg-white w-8/12 rounded-tl-full rounded-bl-full mx-auto shadow-2xl shadow-[#261089] overflow-hidden"> { /* Main div */}
          <div class="block">
            <h3 class="text-center text-3xl mt-5 font-bold pb-5">Registro de pacientes</h3>
          </div>

          <form action="#" class="flex justify-center">
            <div class="">
              <div class="py-3 px-4">
                <input
                  type="text"
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Nombre"
                />
              </div>
              <div class="py-3 px-4">
                <input
                  type="email"
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Identificación"
                  maxlength="3"
                />
              </div>
              <div class="py-3 px-4">
                <input
                  type="number"
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Altura"
                />
              </div>
              <div class="py-3 px-4">
                <input
                  type="text"
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Creatinina"
                />
              </div>
            </div>


            <div>
              <div class="py-3 px-4">
                <input
                  type="text"
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Apellido"
                />
              </div>
              <div class="py-3 px-4">
                <input
                  type="text"
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Edad"
                />
              </div>
              <div class="py-3 px-4">
                <input
                  type="text"
                  class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Peso"
                />
              </div>
              <div class="px-4 pt-5">
                <label class="pr-2">
                  <input
                    type="radio"
                    name="genero"
                    value="Hombre"
                  />
                  <span> Hombre </span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="genero"
                    value="Mujer"
                  />
                  <span> Mujer </span>
                </label>
              </div>

              <div class="mt-10">
              <button
                type="button"
                class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-6 w-full"
                style={{ background: 'linear-gradient(to right, #00dfc3, #533eab, #9190ff, #6674ff, #261089)' }}
              >
                Registrar
              </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default PatientRegistry;
