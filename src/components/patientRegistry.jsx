import { Card, CardBody, Input, CardHeader, Typography, Button, CardFooter } from '@material-tailwind/react';
import { useState } from 'react'
import ParticlesBackground from './particles';
import SingleSelect from './selectAntibiot';
import Error from './error';
import Sidebar from './sidebar';
import axios from 'axios';
import { setEnable } from './enable';


function PatientRegistry() {

    const [height, setHeight] = useState('')
    const [creatinina, setCreatinina] = useState('')
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    const [genre, setGenre] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')



    /*useEffect(() => {
      document.querySelectorAll('input[type="number"]').forEach(input => {
        input.oninput = () => {
          if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
        }
      })
    }, []);*/


  function sendBackend() {

    if ([height, creatinina, age, weight, genre].includes('')) {
      setMessage('Todos los campos son obligatorios')
      setError(true)
      return;
    }
    setError(false)
    setEnable(false)
    const dataPatient = {
      height: parseFloat(height),
      creatinina: parseFloat(creatinina),
      age: parseFloat(age),
      weight: parseFloat(weight),
      genre,
    }
    console.log(dataPatient)
    axios.post('/patient/DataPatient', dataPatient).then(res => {
      if(res.data === 'YES'){
  
      }else{
        alert('usuario no encontrado')
      }
    })
  }
  function reload() {
    setEnable(true)
    setAge('')
    setCreatinina('')
    setGenre('')
    setHeight('')
    setWeight('')
  }

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
                      <Input 
                        type="number" 
                        label="Altura (cm)" 
                        variant="standard" 
                        size="lg" 
                        color='teal' 
                        value={height}
                        onChange={(e) => {(setHeight(e.target.value))}}
                        />
                      <Input 
                        type="number"
                        label="Peso (kg)"
                        variant="standard"
                        size="lg" 
                        color='teal' 
                        value={weight}
                        onChange={(e) => {(setWeight(e.target.value))}}
                        />
                      <Input type="number" 
                        label="Edad" 
                        variant="standard"
                        size="lg" 
                        color='teal' 
                        value={age}
                        onChange={(e) => {(setAge(e.target.value))}}
                        />
                      <Input 
                        type="number" 
                        label="Creatinina (mg/dL)" 
                        variant="standard" 
                        size="lg" 
                        color='teal' 
                        value={creatinina}
                        onChange={(e) => {(setCreatinina(e.target.value))}}
                        />
                      <div class=" pt-5">
                        <label class="pr-2">
                          <input
                            type="radio"
                            name="genero"
                            value="Hombre"
                            onChange={(e) => {setGenre(e.target.value)}}

                          />
                          <span> Hombre </span>
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="genero"
                            value="Mujer"
                            onChange={(e) => {setGenre(e.target.value)}}
                          />
                          <span> Mujer </span>
                        </label>
                      </div>

                      <div className="-ml-2.5">
                        
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
                <div className='mb-2'>
                    {error && <Error message={message}/>}
                </div>
                  <div>
                    <Button variant="gradient" fullWidth color='teal' className='z-0'
                      style={{ background: 'linear-gradient(to right, #4db6ac, #26a69a, #00897b , #26a69a , #4db6ac)' }}
                      onClick={sendBackend}
                    >
                      Calcular
                    </Button>
                  </div>

                  <div className='pt-3'>
                    <Button variant="gradient" fullWidth color='teal'
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

export default PatientRegistry;
