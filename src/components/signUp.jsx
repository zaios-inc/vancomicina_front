import React from "react";

function SignUp() {

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-2xl relative
              before:absolute
              before:w-full
              before:h-full
              before:-z-10
              before:bg-gradient-to-r
              before:from-[#00dfc3]
              before:to-[#9190ff]
              before:left-0
              before:top-0
              before:blur-[10px] text-black w-full">
          <div class="text-center mb-4">
                  <img
                    class="mx-auto w-48"
                    src="https://i.ibb.co/YkDZhGW/Zaios-Logo.png"
                    alt="Zaios logo"
                  />
                ¡Crea tu cuenta!</div>
                <div class="mb-4">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Correo electrónico"
                    />
                </div>

                <div class="mb-4">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Usuario"
                    />
                </div>

                <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Contraseña"
                    />
                </div>

                <div class="mb-4">
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Confirmar contraseña"
                    />
                </div>

                <div class="text-center pt-1 pb-1 mt-8">
                    <button
                      class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{ background: 'linear-gradient(to right, #00dfc3, #533eab, #9190ff, #6674ff, #261089)' }}
                    >
                      Registrarse
                    </button>
                </div>
          </div>
              <div class="text-grey-dark mt-8">
                ¿Ya tienes una cuenta?
                  <a href="./login" class="no-underline border-b border-[#533eab] text-[#533eab] ml-1">
                    Inicia sesión
                  </a>.
        </div>
      </div>
    </div>
  )
}

export default SignUp;
