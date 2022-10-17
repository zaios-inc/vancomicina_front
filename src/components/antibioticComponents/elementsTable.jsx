import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Editar from '../../images/editar.png';
import Borrar from '../../images/delete.png'

function ElementsTable({ antibiotic }) {

  const navegar = useNavigate()

  function DeleteAntibiotic(idAntibiotic) {
    axios.post('/antibiotic/deleteAntibiotic', { _id: idAntibiotic }).then(res => {
      alert(res.data)
      navegar(0)
    }).catch(err => console.log(err))
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
