import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("../register");
  }

  return (
    <section class="h-full gradient-form bg-gray-200 md:h-screen flex justify-center items-center">
      <div class="container py-12 px-6 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="xl:w-10/12">
            <div class="block bg-white shadow-lg shadow-[#9190ff] rounded-lg">
              <div class="lg:flex lg:flex-wrap g-0 ">
                <div class="lg:w-6/12 px-4 md:px-0">
                  <div class="md:p-12 md:mx-6">
                    <div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="https://i.ibb.co/YkDZhGW/Zaios-Logo.png"
                        alt="Zaios logo"
                      />
                    </div>
                <form>
                  <p class="mb-4 text-center">¡Bienvenidos!</p>
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

                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{ background: 'linear-gradient(to right, #00dfc3, #533eab, #9190ff, #6674ff, #261089)' }}
                    >
                      Iniciar sesión
                    </button>
                    <a class="text-gray-500" href="#!">¿Olvidaste tu contraseña?</a>
                  </div>

                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2 font-semibold">¿No tienes una cuenta?</p>
                    <button
                      type="button"
                      class="inline-block px-6 py-2 border-2 border-[#533eab] text-[#533eab] font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={navigateToSignUp}
                    >
                      Regístrate
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <img
              class="lg:w-6/12 lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none object-cover"
              src="https://i.ibb.co/pw4mS2p/imagen-2022-10-01-175249651.png"
              alt="Butterfly"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
