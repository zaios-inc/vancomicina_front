import { useNavigate } from "react-router-dom";

function Select() {
    const navigate = useNavigate();

return (
    <div class="min-h-screen flex flex-col">
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

                <div class="text-center pt-1 pb-1 mt-8">
                    <button
                      class="inline-block px-6 py-5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-10"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={() => navigate("../patient")}
                      style={{ background: 'linear-gradient(to right, #261089, #533eab, #6674ff, #533eab, #261089)' }}
                    >
                      Ingresar Paciente
                    </button>
                    <button
                      class="inline-block px-6 py-5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={() => navigate("../antibiotic")}
                      style={{ background: 'linear-gradient(to right, #261089, #533eab, #6674ff, #533eab, #261089)' }}
                    >
                      Ingresar Antibiotico
                    </button>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Select
