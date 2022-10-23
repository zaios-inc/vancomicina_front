import React, { useState } from 'react';
import Error from './error';
import axios from 'axios';
import ZaiosLogo from '../images/ZaiosLogo.png';
import { Button, Input } from '@material-tailwind/react';
const Swal = require('sweetalert2');

function SignUp() {

  //Hooks
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordComfirm, setPasswordComfirm] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  function RegistrarUsuario() {

    if ([name, email, password, passwordComfirm].includes('')) {
      setMessage('Todos los campos son obligatorios');
      setError(true);
      return;
    }

    if (password !== passwordComfirm) {
      setMessage('Las contraseñas no coinciden');
      setError(true);
      return;
    }

    setError(false)
    const newUser = {
      email: email,
      name: name,
      password: password
    }

    axios.post('/user/register', newUser)
      .then(res => {
        Swal.fire({
          title: res.data,
          icon: 'success'
        })
      })
      .then(err => { console.log(err) });

    setEmail('');
    setName('');
    setMessage('');
    setPassword('');
    setPasswordComfirm('');
  }

  return (
    <div class='bg-gray-200 min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 z-10'>
        <div class='bg-white px-6 py-8 rounded shadow-2xl relative
              before:absolute
              before:w-full
              before:h-full
              before:-z-10
              before:bg-gradient-to-r
              before:from-[#00dfc3]
              before:to-[#9190ff]
              before:left-0
              before:top-0
              before:blur-[10px] text-black w-full'>
          <div class='text-center mb-5'>
            <img
              class='mx-auto w-48'
              src={ZaiosLogo}
              alt='Zaios logo'
            />
            ¡Crea tu cuenta!</div>
          <div class='mb-4'>
            <Input
              type='text'
              maxLength=""
              label='Correo electrónico'
              variant='standard'
              size='sm'
              color='blue'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          <div class='mb-4'>
            <Input
              type='text'
              maxLength=""
              label='Usuario'
              variant='standard'
              size='sm'
              color='blue'
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>

          <div class='mb-4'>
            <Input
              type='password'
              maxLength=""
              label='Contraseña'
              variant='standard'
              size='sm'
              color='blue'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <div class='mb-4'>
            <Input
              type='password'
              maxLength=""
              label='Confirmar contraseña'
              variant='standard'
              size='sm'
              color='blue'
              value={passwordComfirm}
              onChange={(e) => { setPasswordComfirm(e.target.value) }}
            />
          </div>
          {error && <Error message={message} />}
          <div class='text-center pb-1 pt-6'>
            <Button fullWidth
              className='font-semibold text-xs'
              variant='gradient'
              onClick={RegistrarUsuario}
              style={{ background: 'linear-gradient(to right, #00dfc3, #533eab, #9190ff, #6674ff, #261089)' }}
            >
              Registrarse
            </Button>
          </div>
        </div>
        <div class='text-grey-dark mt-8 text-center'>
          ¿Ya tienes una cuenta?
          <a href='/vancomicina_front' class='no-underline border-b border-[#533eab] text-[#533eab] ml-1 text-center'>
            Iniciar sesión
          </a>.
        </div>
      </div>
    </div>
  )
}

export default SignUp;
