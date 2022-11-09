import { Card, CardBody, Input, CardHeader, Typography, Button, CardFooter, Navbar } from '@material-tailwind/react';
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
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backendString}/user/getlogin`).then(res => {
      setId(res.data.id)
      setEmail(res.data.email)
      setName(res.data.name)
      setPassword(res.data.password)
      setShow(document.getElementById('newpassword'))
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
      .then(err => { console.log(err) })
  }

  function showChecked() {
    const element = document.getElementById('divpassword');
    console.log(show.checked)
    if (show.checked === true) {
      element.className = 'visible pt-3';
    } else {
      element.className = 'invisible pt-3';
    }
  }

  return (
    <div className='flex lg:pl-64'>
      <Sidebar />
      <Navbar />
      <div
        className='w-full h-screen flex justify-center items-center'
        style={{
          background: 'linear-gradient(to right, #261089, #6674ff, #9190ff, #6674ff, #261089)',
        }}
      >
        <Card className='w-auto h-1/2 shadow-2xl shadow-[#261089] z-10'>
          <CardHeader
            variant='gradient'
            className='grid h-20 place-items-center shadow-lg pl-5 pr-5 shadow-[#261089] bg-[#261089]'
          >
            <Typography variant="h3" color="white">
              Datos del usuario
            </Typography>
          </CardHeader>
          <div className='flex'>
            <div className='w-full'>
              <CardBody className='flex flex-col gap-4'>
                <Input
                  type='text'
                  maxLength='30'
                  label='Nombre:'
                  variant='standard'
                  size='lg'
                  color='deep-purple'
                  value={name}
                  onChange={(e) => { (setName(e.target.value)) }}
                />
                <Input
                  type='text'
                  maxLength='30'
                  label='Correo electrónico:'
                  variant='standard'
                  size='lg'
                  color='deep-purple'
                  value={email}
                  onChange={(e) => { (setEmail(e.target.value)) }}
                />
                <div>
                  <input
                    id='newpassword'
                    type='checkbox'
                    label='Cambiar contraseña'
                    value={show}
                    onClick={showChecked}
                    required
                  />
                  <label className='pl-2'>Cambiar contraseña</label>
                  <div id='divpassword' className='invisible pt-3'>
                    <Input
                      type='text'
                      maxLength='30'
                      placeholder='Nueva contraseña:'
                      variant='standard'
                      size='lg'
                      color='deep-purple'
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
              <Button variant='gradient' fullWidth color='deep-purple' className='z-0'
                style={{ background: 'linear-gradient(to right, #261089, #9190ff, #261089)' }}
                onClick={editarUsuario}
              >
                Guardar cambios
              </Button>
            </div>

          </CardFooter>
        </Card>
      </div>

      <ParticlesBackground />
    </div>
  );
}

export default User;
