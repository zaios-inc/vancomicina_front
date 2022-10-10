import { Card, CardBody, Input, CardHeader, Typography, Button, CardFooter } from '@material-tailwind/react';
import React from 'react'
import ParticlesBackground from './particles';
import SingleSelect from './selectAntibiot';
import Sidebar from './sidebar';

function PatientRegistry() {

  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='flex min-h-screen'>

          <div className='w-1/6' >
            <Sidebar />
          </div>

          <div className='w-full' style={{ background: 'linear-gradient(to right, #00897b, #00dfc3, #00897b)' }}>
            <div className='flex justify-center items-center'>
              <Card className="w-1/2 h-1/2 shadow-2xl shadow-[] z-10">
                <CardHeader
                  variant="gradient"
                  className="grid h-20 place-items-center shadow-md shadow-[#00dfc3]"
                  color='teal'

                >
                  <Typography variant="h3" color="white">
                    Cálculo de antibióticos
                  </Typography>
                </CardHeader>
                <div className='flex'>
                  <div className='w-1/2'>
                    <CardBody className="flex flex-col gap-4">
                      <div className='text-center'>
                        <Typography variant="h6" color="teal">
                          Datos del paciente
                        </Typography>
                      </div>
                      <Input type="number" label="Altura (cm)" variant="standard" size="lg" color='teal' />
                      <Input type="number" label="Peso (kg)" variant="standard" size="lg" color='teal' />
                      <Input type="number" label="Edad" variant="standard" size="lg" color='teal' />
                      <Input type="number" label="Creatinina (mg/dL)" variant="standard" size="lg" color='teal' />
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
                  </div>

                  <div className='w-1/2'>
                    <CardBody className="flex flex-col gap-4">
                      <div className='text-center'>
                        <Typography variant="h6" color="teal">
                          Seleccionar antibiótico
                        </Typography>
                      </div>
                      <div className='pt-2'>
                        <SingleSelect />
                      </div>
                    </CardBody>
                  </div>
                </div>

                <CardFooter className="pt-0">

                  <div>
                    <Button variant="gradient" fullWidth color='teal' className='z-0'
                      style={{ background: 'linear-gradient(to right, #4db6ac, #26a69a, #00897b , #26a69a , #4db6ac)' }}
                    >
                      Calcular
                    </Button>
                  </div>

                  <div className='pt-3'>
                    <Button variant="gradient" fullWidth color='teal'
                      style={{ background: 'linear-gradient(to right, #4db6ac, #26a69a, #00897b , #26a69a , #4db6ac)' }}
                    >

                      Nuevo paciente
                    </Button>
                  </div>

                </CardFooter>
              </Card>
              <ParticlesBackground />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PatientRegistry;
