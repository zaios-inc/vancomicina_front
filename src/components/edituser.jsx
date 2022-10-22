import { Card, CardBody, Input, CardHeader, Typography, Button, CardFooter } from '@material-tailwind/react';
import { useState, useEffect } from 'react'
import ParticlesBackground from './particles';
import Sidebar from './sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { backendString } from './backendConnection'

const Swal = require('sweetalert2');

function User() {

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backendString}/user/getlogin`).then(res => {
      setId(res.data.id)
      setEmail(res.data.email)
      setName(res.data.name)
      setPassword(res.data.password)
      setUser(res.data)
    })
  }, [])

  function editarUsuario() {
    const updateUser = {
      id: id,
      email: email,
      name: name,
      password: password,
      newpassword: newpassword
    }
    axios.post(`${backendString}/user/updateuser`, updateUser)
    .then(res => {
      Swal.fire({
        title: res.data,
        icon: 'info'
      })
      navigate('../home')
    })
    .then(err => {console.log(err)})
  }

  function showChecked() {
    var element = document.getElementById("content");
    setShow(document.getElementById('newpassword'))
    console.log(user)
    if (show.checked === true) {
      element.className='visible';
    } else {
      element.className='invisible';
    }
  }

  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='flex min-h-screen'>

          <div className='w-1/6' >
            <Sidebar />
          </div>

          <div className='w-full'  style={{ background: 'linear-gradient(to right, #261089, #9190ff, #261089)' }}>
            <div className='flex justify-center items-center'>
              <Card className='w-auto h-1/2 shadow-2xl shadow-[#1a237e] z-10'>
                <CardHeader
                  variant='gradient'
                  className='grid h-20 place-items-center shadow-lg shadow-[#0097a7] bg-[#0097a7]'
                >
                  <Typography variant='h3' color='white'>
                    Datos del Usuario
                  </Typography>
                </CardHeader>
                <div className='flex'>
                  <div className='w-full'>
                    <CardBody className='flex flex-col gap-4'>
                      <Input
                        type='text'
                        maxLength="30"
                        label='Nombre:'
                        variant='standard'
                        size='lg'
                        color='cyan'
                        value={name}
                        onChange={(e) => { (setName(e.target.value)) }}
                      />
                      <Input
                        type='text'
                        maxLength="30"
                        label='Correo electrónico:'
                        variant='standard'
                        size='lg'
                        color='cyan'
                        value={email}
                        onChange={(e) => { (setEmail(e.target.value)) }}
                      />
                      <div>
                        <input
                          id="newpassword"
                          type="checkbox"
                          label='Cambiar contraseña'
                          value={show}
                          onClick={showChecked}
                          required
                        />
                        <label>Cambiar contraseña</label>
                        <div id='content' className='invisible'>
                          <Input
                            type='text'
                            maxLength="30"
                            label='Nueva Contraseña:'
                            variant='standard'
                            size='lg'
                            color='cyan'
                            value={newpassword}
                            onChange={(e) => { (setNewPassword(e.target.value)) }}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </div>
                </div>

                <CardFooter className='pt-0'>
                  <div>
                    <Button variant='gradient' fullWidth color='blue' className='z-0'
                      style={{ background: 'linear-gradient(to right, #4dd0e1, #00bcd4, #0097a7, #00bcd4 , #4dd0e1)' }}
                      onClick={editarUsuario}
                    >
                      Guardar cambios
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

export default User;
