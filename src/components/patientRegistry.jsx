import { Card, CardBody, Input, CardHeader, Typography, Button, CardFooter } from '@material-tailwind/react';
import React from 'react'
import ParticlesBackground from './particles';
import SingleSelect from './selectAntibiot';
import Sidebar from './sidebar';


function PatientRegistry() {

  return (
    <div>
      <div className='flex min-h-screen bg-purple-500'>

        <div className='w-1/6'>
          <Sidebar />
        </div>

        <div className='pl-60 py-32'>
          <Card className="w-96 shadow-2xl shadow-[#9190ff]">
            <CardHeader
              variant="gradient"
              className="grid h-20 place-items-center shadow-lg shadow-[#9190ff]"
              color='purple'
            >
              <Typography variant="h3" color="white">
                Datos del paciente
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input type="number" label="Altura (cm)" variant="standard" size="lg" color='purple' />
              <Input type="number" label="Peso (kg)" variant="standard" size="lg" color='purple' />
              <Input type="number" label="Edad" variant="standard" size="lg" color='purple' />
              <Input type="number" label="Creatinina" variant="standard" size="lg" color='purple' />
              <div class=" pt-5">
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

              <div className="-ml-2.5">
                Poner mensaje de error aquí
              </div>
            </CardBody>
            <CardFooter className="pt-0">

              <div>
                <Button variant="gradient" fullWidth color='purple'>
                  Calcular
                </Button>
              </div>

              <div className='pt-3'>
                <Button variant="gradient" fullWidth color='purple'>
                  Nuevo paciente
                </Button>
              </div>

            </CardFooter>
          </Card>
        </div>

        <div className='py-36 pl-10 w-96'>
          <SingleSelect />
        </div>
        <ParticlesBackground />
      </div>
    </div>

  )
}

export default PatientRegistry;
