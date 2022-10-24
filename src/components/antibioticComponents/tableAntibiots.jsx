import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from "@material-tailwind/react";
import { backendString } from '../backendConnection'
import { BsPlusLg } from "react-icons/bs";
import Sidebar from '../sidebar'
import ParticlesBackground from '../particles'
import ElementsTable from './elementsTable';
import TableScrollbar from 'react-table-scrollbar';

export default function Table() {

  const [allAntibiotics, setAllAntibiotics] = useState([])

  useEffect(() => {

    axios.get(`${backendString}/antibiotic/listAntibiotict`).then(res => {
      setAllAntibiotics(res.data)
    })
  }, [])


  const listAntibiotics = allAntibiotics.map(antibiotic => {
    return (
      <ElementsTable antibiotic={antibiotic} />
    )
  })


  return (
    <div className='min-h-screen' style={{ background: 'linear-gradient(to right, #533eab, #9190ff, #533eab)' }}>
      <div className='w-1/6'>
        <Sidebar />
      </div>
      <div className="pl-64" >
        <div className="w-1/2 h-1/2 mx-auto " >
          <div className="pt-5">
            <div className="flex justify-between h-24">
              <div className="z-10 py-2">
                <form>
                  <label for="default-search" class="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class=" bg-white block p-3 pl-10 py-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                  </div>
                </form>
              </div>
              <div className="flex w-auto py-2 pr-2 z-10">
                <div className="gap-4">
                  <Link to="/antibiotic">
                    <Button color="indigo" size="lg" className="flex">Nuevo antibiótico<div className="pl-2 pt-0.5 z-10"><BsPlusLg /></div></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-auto z-10">
              <div className="overflow-hidden border rounded-lg">
                <TableScrollbar height='550px'>
                  <table className=" divide-y divide-black">
                    <thead className="bg-indigo-500">
                      <tr>
                        <th className="py-3">
                        </th>
                        <th className="px-6 py-3 text-base font-bold text-center text-white uppercase ">Id</th>
                        <th className="px-6 text-base font-bold text-center text-white uppercase ">Nombre</th>
                        <th className="px-6 text-base font-bold text-center text-white uppercase ">Clase</th>
                        <th className="px-6 text-base font-bold text-center text-white uppercase ">Editar</th>
                        <th className="px-6 text-base font-bold text-center text-white uppercase ">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-500 bg-white">{listAntibiotics}</tbody>
                  </table>
                </TableScrollbar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParticlesBackground />
    </div>
  );
}
