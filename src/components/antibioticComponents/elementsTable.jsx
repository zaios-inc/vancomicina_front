import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Editar from '../../images/editar.png';
import { backendString } from '../backendConnection'
import Borrar from '../../images/delete.png';
const Swal = require('sweetalert2');

function ElementsTable({ antibiotic }) {

  const navegar = useNavigate()

  function DeleteAntibiotic(idAntibiotic) {
      Swal.fire({
        title: '¿Eliminar este antibiótico?',
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: false,
        denyButtonText: `Eliminar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
          axios.post(`${backendString}/antibiotic/deleteAntibiotic`, { _id: idAntibiotic }).then(res => {
          Swal.fire('Antibiotico Eliminado', '', 'success')
          navegar(0)
          }).catch(err => console.log(err))
        }
      })
    }

  return (
    <tr>
      <td className="py-3 pl-4">
      </td>
      <td className="px-2 py-4 text-base font-medium text-gray-800 whitespace-nowrap">
        {antibiotic._id}
      </td>
      <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-center">
        {antibiotic.name}
      </td>
      <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-center">
        {antibiotic.typeAntibiotic}
      </td>
      <td className="px-6 py-4 text-base font-medium whitespace-nowrap">
        <div className="flex justify-center">
          <button>
            <Link to={`/editAntibiotic/${antibiotic._id}`}>
              <img
                className="h-6 w-6 text-gray-400"
                src={Editar}
                alt='Search icon'
              />
            </Link>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap">
        <div className="flex justify-center">
          <button>
            <img
              className="h-6 w-6 text-gray-400"
              src={Borrar}
              alt='Search icon'
              onClick={() => { DeleteAntibiotic(antibiotic._id) }}
            />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default ElementsTable;
