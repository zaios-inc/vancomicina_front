import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { backendString } from '../backendConnection'
import axios from "axios";
import Sidebar from "../sidebar";
import Error from "../error";
import ParticlesBackground from "../particles";
import {
  Card,
  CardBody,
  Input,
  CardHeader,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
const Swal = require("sweetalert2");

function EditAntibiotic() {
  const params = useParams();
  const [max1, setMax1] = useState("");
  const [max2, setMax2] = useState("");
  const [max3, setMax3] = useState("");
  const [min1, setMin1] = useState("");
  const [min2, setMin2] = useState("");
  const [min3, setMin3] = useState("");
  const [recomended1, setRecomended1] = useState("");
  const [recomended2, setRecomended2] = useState("");
  const [recomended3, setRecomended3] = useState("");
  const [antibiotic, setAntibiotic] = useState("");
  const [typeAntibiotic, setTypeAntibiotic] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`${backendString}/antibiotic/getAntiobictid`, { _id: params._id })
      .then((res) => {
        const dataAntibiotic = res.data[0];
        setMax1(dataAntibiotic.max1);
        setMax2(dataAntibiotic.max2);
        setMax3(dataAntibiotic.max3);
        setMin1(dataAntibiotic.min1);
        setMin2(dataAntibiotic.min2);
        setMin3(dataAntibiotic.min3);
        setRecomended1(dataAntibiotic.recomended1);
        setRecomended2(dataAntibiotic.recomended2);
        setRecomended3(dataAntibiotic.recomended3);
        setAntibiotic(dataAntibiotic.name);
        setTypeAntibiotic(dataAntibiotic.typeAntibiotic);
      });

    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.oninput = () => {
        if (input.value.length > input.maxLength)
          input.value = input.value.slice(0, input.maxLength);
      };
    });
  }, [params]);

  function FunUpdateAntibiotic() {
    if (
      [
        min1,
        min2,
        max1,
        max2,
        recomended1,
        recomended2,
        antibiotic,
        typeAntibiotic,
      ].includes("")
    ) {
      setMessage("Registre como minimo dos recomendaciones");
      setError(true);
      return;
    }
    const updatedAntibiotic = {
      _id: params._id,
      name: antibiotic,
      typeAntibiotic,
      min1: parseInt(min1),
      max1: parseInt(max1),
      recomended1,
      min2: parseInt(min2),
      max2: parseInt(max2),
      recomended2,
      min3: parseInt(min3),
      max3: parseInt(max3),
      recomended3,
    };

    axios
      .post(`${backendString}/antibiotic/updateAntibiotic`, updatedAntibiotic)
      .then((res) => {
        Swal.fire({
          title: "Actualizado correctamente",
          icon: "success",
        });
      });
  }

  return (
    <div>
      <div className="flex min-h-screen">
        <div className="w-1/6">
          <Sidebar />
        </div>

        <div
          className="w-full flex items-center"
          style={{
            background: "linear-gradient(to right, #533eab, #9190ff, #533eab)",
          }}
        >
          <Card className="w-1/2 shadow-2xl mx-auto shadow-[#9190ff] z-10">
            <CardHeader
              variant="gradient"
              className="grid h-20 place-items-center shadow-lg shadow-[#9190ff] bg-[#533eab]"
            >
              <Typography variant="h3" color="white">
                Editar antibi??tico
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <div className="mx-auto">
                <Input
                  className="text-center"
                  type="text"
                  variant="standard"
                  size="lg"
                  color="purple"
                  placeholder="Nombre antibi??tico"
                  maxLength="50"
                  value={antibiotic}
                  onChange={(e) => {
                    setAntibiotic(e.target.value);
                  }}
                />
              </div>
              <div className="mx-auto">
                <Input
                  className="text-center"
                  type="text"
                  variant="standard"
                  size="lg"
                  color="purple"
                  placeholder="Clase del antibi??tico"
                  maxLength="50"
                  value={typeAntibiotic}
                  onChange={(e) => {
                    setTypeAntibiotic(e.target.value);
                  }}
                />
              </div>

              <div className="flex">
                <div className="w-1/2">
                  <Typography
                    variant="h6"
                    className="pt-5 text-center text-[#533eab]"
                  >
                    Niveles de Clearence
                  </Typography>

                  <div className="pt-5 flex justify-around">
                    <Typography
                      variant="h7"
                      className="text-black font-semibold"
                    >
                      M??nimo
                    </Typography>
                    <Typography
                      variant="h7"
                      className="text-black font-semibold"
                    >
                      M??ximo
                    </Typography>
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="pt-5 text-center">
                    <Typography
                      variant="h6"
                      className="text-center text-[#533eab] flex justify-center pt-11"
                    >
                      Recomendaci??n
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2">
                  <div className="flex justify-around">
                    <input
                      type="number"
                      maxLength="3"
                      class="text-center form-control block w-20 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="0"
                      value={min1}
                      onChange={(e) => {
                        setMin1(e.target.value);
                      }}
                    />
                    <input
                      type="number"
                      class="text-center form-control block w-20 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="0"
                      maxLength="3"
                      value={max1}
                      onChange={(e) => {
                        setMax1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      maxLength="50"
                      class="text-center form-control block w-auto px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="Dosis (g) - Tiempo (hrs)"
                      value={recomended1}
                      onChange={(e) => {
                        setRecomended1(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2">
                  <div className="flex justify-around">
                    <input
                      type="number"
                      maxLength="3"
                      class="text-center form-control block w-20 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="0"
                      value={min2}
                      onChange={(e) => {
                        setMin2(e.target.value);
                      }}
                    />
                    <input
                      type="number"
                      maxLength="3"
                      class="text-center form-control block w-20 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="0"
                      value={max2}
                      onChange={(e) => {
                        setMax2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      maxLength="50"
                      class="text-center form-control block w-auto px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="Dosis (g) - Tiempo (hrs)"
                      value={recomended2}
                      onChange={(e) => {
                        setRecomended2(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2">
                  <div className="flex justify-around">
                    <input
                      type="number"
                      maxLength="3"
                      class="text-center form-control block w-20 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="0"
                      value={min3}
                      onChange={(e) => {
                        setMin3(e.target.value);
                      }}
                    />
                    <input
                      type="number"
                      maxLength="3"
                      class="text-center form-control block w-20 px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="0"
                      value={max3}
                      onChange={(e) => {
                        setMax3(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      maxLength="50"
                      class="text-center form-control block w-auto px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#982cac] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#982cac] focus:outline-none"
                      placeholder="Dosis (g) - Tiempo (hrs)"
                      value={recomended3}
                      onChange={(e) => {
                        setRecomended3(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardBody>
            <div>{error && <Error message={message} />}</div>
            <CardFooter className="pt-0">
              <div className="pt-5">
                <Button
                  variant="gradient"
                  fullWidth
                  color="deep-purple"
                  className="z-0"
                  style={{
                    background:
                      "linear-gradient(to right, #261089, #533eab, #6674ff, #533eab, #261089)",
                  }}
                  onClick={FunUpdateAntibiotic}
                >
                  Actualizar
                </Button>
              </div>
              <div className="pt-5">
                <Button
                  variant="gradient"
                  fullWidth
                  color="deep-purple"
                  className="z-0"
                  style={{
                    background:
                      "linear-gradient(to right, #261089, #533eab, #6674ff, #533eab, #261089)",
                  }}
                  onClick={() => {
                    navigate("/listAntibotics");
                  }}
                >
                  Volver
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <ParticlesBackground />
      </div>
    </div>
  );
}

export default EditAntibiotic;
