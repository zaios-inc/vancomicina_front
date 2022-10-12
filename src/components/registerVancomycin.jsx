import { Card, CardBody, Input, CardHeader, Typography, Button, CardFooter } from '@material-tailwind/react';
import { useState, useEffect } from 'react'
import ParticlesBackground from './particles';
import Error from './error';
import Sidebar from './sidebar';
import axios from 'axios';

function RegisterVancomycin() {

  const [height, setHeight] = useState('');
  const [creatinina, setCreatinina] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState('');
  const [interval, setInterval] = useState('');
  const [infusion, setInfusion] = useState('');
  const [loadingDose, setLoadingDose] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.querySelectorAll('input[type="number"]').forEach(input => {
      input.oninput = () => {
        if (input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
      }
    })
  }, []);

  function sendBackend() {

    if ([height, creatinina, age, weight, dose, interval, infusion, loadingDose, genre].includes('')) {
      setMessage('Todos los campos son obligatorios');
      setError(true);
      return;
    }
    setError(false);
    const dataVancomicina = {
      height: parseFloat(height),
      creatinina: parseFloat(creatinina),
      age: parseFloat(age),
      weight: parseFloat(weight),
      dose: parseFloat(dose),
      interval: parseFloat(interval),
      infusion: parseFloat(infusion),
      loadingDose: parseFloat(loadingDose),
      genre
    }
    axios.post('/vancomicina/DataVancomicina', dataVancomicina).then(res => { })
  }

  function reload() {
    setAge('');
    setCreatinina('');
    setGenre('');
    setHeight('');
    setWeight('');
    setDose('');
    setInterval('');
    setInfusion('');
    setLoadingDose('');
  }

  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='flex min-h-screen'>

          <div className='w-1/6' >
            <Sidebar />
          </div>

          <div className='w-full'>
            <div className='flex justify-center items-center'>
              <Card className='w-1/2 h-1/2 shadow-2xl shadow-[] z-10'>
                <CardHeader
                  variant='gradient'
                  className='grid h-20 place-items-center shadow-md shadow-[#00dfc3]'
                  color='teal'

                >
                  <Typography variant='h3' color='white'>
                    Cálculo de antibióticos
                  </Typography>
                </CardHeader>
                <div className='text-center pt-6'>
                  <Typography variant='h6' color='teal'>
                    Datos del paciente
                  </Typography>
                </div>
                <div className='flex'>
                  <div className='w-1/2'>
                    <CardBody className='flex flex-col gap-4'>
                      <Input
                        type='number'
                        maxLength="3"
                        label='Altura (cm)'
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={height}
                        onChange={(e) => { (setHeight(e.target.value)) }}
                      />
                      <Input
                        type='number'
                        maxLength="3"
                        label='Peso (kg)'
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={weight}
                        onChange={(e) => { (setWeight(e.target.value)) }}
                      />
                      <Input type='number'
                        label='Edad'
                        maxLength="3"
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={age}
                        onChange={(e) => { (setAge(e.target.value)) }}
                      />

                      <div className=''>
                      <Input
                        type='number'
                        maxLength="3"
                        label='Creatinina (mg/dL)'
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={creatinina}
                        onChange={(e) => { (setCreatinina(e.target.value)) }}
                      />
                      </div>
                    </CardBody>
                  </div>
                  <div className='w-1/2'>
                    <CardBody className='flex flex-col gap-4'>
                      <Input
                        type='number'
                        maxLength="3"
                        label='Dosis (mg)'
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={dose}
                        onChange={(e) => { (setDose(e.target.value)) }}
                      />
                      <Input
                        type='number'
                        maxLength="3"
                        label='Intervalo'
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={interval}
                        onChange={(e) => { (setInterval(e.target.value)) }}
                      />
                      <Input type='number'
                        label='Tiempo de infusión'
                        maxLength="3"
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={infusion}
                        onChange={(e) => { (setInfusion(e.target.value)) }}
                      />

                      <Input
                        type='number'
                        maxLength="3"
                        label='Dosis de carga'
                        variant='standard'
                        size='lg'
                        color='teal'
                        value={loadingDose}
                        onChange={(e) => { (setLoadingDose(e.target.value)) }}
                      />

                    </CardBody>
                  </div>
                </div>

                <div class='pt-1 mx-auto pb-6'>
                    <label for='man' class='pr-2'>
                      <input
                        type='radio'
                        id='man'
                        checked={genre === 'men' ? true : false}
                        onChange={() => { setGenre('men') }}
                      />
                      <span> Hombre </span>
                    </label>

                    <label for='woman'>
                      <input
                        type='radio'
                        id='woman'
                        checked={genre === 'woman' ? true : false}
                        onChange={() => { setGenre('woman') }}
                      />
                      <span> Mujer </span>
                    </label>
                  </div>

                <CardFooter className='pt-0'>
                  <div className='mb-2'>
                    {error && <Error message={message} />}
                  </div>
                  <div>
                    <Button variant='gradient' fullWidth color='teal' className='z-0'
                      style={{ background: 'linear-gradient(to right, #4db6ac, #26a69a, #00897b , #26a69a , #4db6ac)' }}
                      onClick={sendBackend}
                    >
                      Calcular
                    </Button>
                  </div>

                  <div className='pt-3'>
                    <Button variant='gradient' fullWidth color='teal'
                      style={{ background: 'linear-gradient(to right, #4db6ac, #26a69a, #00897b , #26a69a , #4db6ac)' }}
                      onClick={reload}
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

export default RegisterVancomycin;
