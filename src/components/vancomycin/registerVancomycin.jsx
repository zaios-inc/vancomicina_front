import { Card, CardBody, Input, CardHeader, Typography, Button, CardFooter } from '@material-tailwind/react';
import { useState, useEffect } from 'react'
import Error from '../error';
import Sidebar from '../sidebar';
import { backendString } from '../backendConnection'
import axios from 'axios';

function RegisterVancomycin({ setEnable }) {

  const [height, setHeight] = useState('');
  const [creatinina, setCreatinina] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState('');
  const [interval, setIntervalValueValue] = useState('');
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
    axios.post(`${backendString}/vancomicina/DataVancomicina`, dataVancomicina).then(res => {
      setEnable(true);
    })
  }

  function reload() {
    setAge('');
    setCreatinina('');
    setGenre('');
    setHeight('');
    setWeight('');
    setDose('');
    setIntervalValueValue('');
    setInfusion('');
    setLoadingDose('');
    setEnable(false);
  }

  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='flex min-h-screen'>

          <div className='w-1/6' >
            <Sidebar />
          </div>

          <div className='w-full flex items-center'>
            <div className='flex'>
              <Card className='w-auto h-1/2 shadow-2xl shadow-[#1a237e] z-10'>
                <CardHeader
                  variant='gradient'
                  className='grid h-20 place-items-center shadow-lg shadow-[#0097a7] bg-[#0097a7]'
                >
                  <Typography variant='h3' color='white'>
                    Calcular vancomicina
                  </Typography>
                </CardHeader>
                <div className='text-center pt-6'>
                  <Typography variant='h6' className="text-[#0097a7]">
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
                        color='cyan'
                        value={height}
                        onChange={(e) => { (setHeight(e.target.value)) }}
                      />
                      <Input
                        type='number'
                        maxLength="3"
                        label='Peso (kg)'
                        variant='standard'
                        size='lg'
                        color='cyan'
                        value={weight}
                        onChange={(e) => { (setWeight(e.target.value)) }}
                      />
                      <Input type='number'
                        label='Edad'
                        maxLength="3"
                        variant='standard'
                        size='lg'
                        color='cyan'
                        value={age}
                        onChange={(e) => { (setAge(e.target.value)) }}
                      />

                      <div className=''>
                        <Input
                          type='number'
                          maxLength="4"
                          label='Creatinina (mg/dL)'
                          variant='standard'
                          size='lg'
                          color='cyan'
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
                        maxLength="6"
                        label='Dosis (mg)'
                        variant='standard'
                        size='lg'
                        color='cyan'
                        value={dose}
                        onChange={(e) => { (setDose(e.target.value)) }}
                      />
                      <Input
                        type='number'
                        maxLength="6"
                        label='Intervalo'
                        variant='standard'
                        size='lg'
                        color='cyan'
                        value={interval}
                        onChange={(e) => { (setIntervalValueValue(e.target.value)) }}
                      />
                      <Input type='number'
                        label='Tiempo de infusión'
                        maxLength="6"
                        variant='standard'
                        size='lg'
                        color='cyan'
                        value={infusion}
                        onChange={(e) => { (setInfusion(e.target.value)) }}
                      />

                      <Input
                        type='number'
                        maxLength="6"
                        label='Dosis de carga'
                        variant='standard'
                        size='lg'
                        color='cyan'
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
                    <Button variant='gradient' fullWidth color='blue' className='z-0'
                      style={{ background: 'linear-gradient(to right, #4dd0e1, #00bcd4, #0097a7, #00bcd4 , #4dd0e1)' }}
                      onClick={sendBackend}
                    >
                      Calcular
                    </Button>
                  </div>

                  <div className='pt-3'>
                    <Button variant='gradient' fullWidth color='blue'
                      style={{ background: 'linear-gradient(to right, #4dd0e1, #26c6da, #0097a7 , #26c6da , #4dd0e1)' }}
                      onClick={reload}
                    >
                      Nuevo paciente
                    </Button>
                  </div>

                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RegisterVancomycin;
