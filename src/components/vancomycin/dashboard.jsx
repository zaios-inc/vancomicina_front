import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ChartLine from './chartline';
import InfoCard from './infoCard';
import Table from './table';
import Vaccine from '../../images/vaccine.png'
import { backendString } from '../backendConnection'

function Dashboard() {

  const [AUC, setAUC] = useState(0)
  const [Vd, setVd] = useState(0)
  const [Ke, setKe] = useState(0)
  const [clvan, setClvan] = useState(0)
  const [listDoses, setListDoses] = useState([])
  const [listDosesLoading, setListDoseLoading] = useState([])

  useEffect(() => {
    axios.get(`${backendString}/vancomicina/DashboardData`).then(res => {
      const listDose = Object.values(res.data.listDose);
      const listDoseLoading = Object.values(res.data.listDoseLoading);
      const listVariables = res.data.listVariables;
      setAUC(listVariables.AUCCIM.toFixed(3))
      setVd(listVariables.vD.toFixed(3))
      setKe(listVariables.kE.toFixed(3))
      setClvan(listVariables.clvancomicina.toFixed(3))
      setListDoses(listDose)
      setListDoseLoading(listDoseLoading)
    })
  }, [listDoses, listDosesLoading, clvan, Ke, Vd, AUC]);


  return (
    <div className='pt-14 pb-28 px-3 md:px-8 h-auto'>
      <div className='container mx-auto max-w-full '>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
          <InfoCard
            color='white'
            headerIcon={Vaccine}
            title='Aclaramiento'
            amount={clvan}
            footerContent='L/h'
            footerContentColor='green'
          />
          <InfoCard
            color='cyan'
            headerContent='Vd'
            title='Volumen distribución'
            amount={Vd}
            footerContent='L'
            footerContentColor='green'
          />
          <InfoCard
            color='teal'
            headerContent='Ke'
            title='Constante eliminación'
            amount={Ke}
            footerContent='h-1'
            footerContentColor='green'
          />
          <InfoCard
            color='blue'
            headerContent='Auc'
            title='Área bajo la curva'
            amount={AUC}
            footerContent='h'
            footerContentColor='green'
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <Table
          title='Concentración'
          header1='N° dosis'
          header2='Cantidad máxima'
          header3='Cantidad mínima'

          row1_col1='1° dosis'
          row1_col2='2° dosis'
          row1_col3='3° dosis'
          row1_col4='4° dosis'
          row1_col5='5° dosis'
          row1_col6='6° dosis'
          row1_col7='7° dosis'

          row2_col1={listDoses[0]}
          row2_col2={listDoses[2]}
          row2_col3={listDoses[4]}
          row2_col4={listDoses[6]}
          row2_col5={listDoses[8]}
          row2_col6={listDoses[10]}
          row2_col7={listDoses[12]}

          row3_col1={listDoses[1]}
          row3_col2={listDoses[3]}
          row3_col3={listDoses[5]}
          row3_col4={listDoses[7]}
          row3_col5={listDoses[9]}
          row3_col6={listDoses[11]}
          row3_col7={listDoses[13]}
        />
        <Table
          title='Concentración (Dosis de Carga)'
          header1='N° dosis'
          header2='Cantidad máxima'
          header3='Cantidad mínima'

          row1_col1='1° dosis'
          row1_col2='2° dosis'
          row1_col3='3° dosis'
          row1_col4='4° dosis'
          row1_col5='5° dosis'
          row1_col6='6° dosis'
          row1_col7='7° dosis'

          row2_col1={listDosesLoading[0]}
          row2_col2={listDosesLoading[2]}
          row2_col3={listDosesLoading[4]}
          row2_col4={listDosesLoading[6]}
          row2_col5={listDosesLoading[8]}
          row2_col6={listDosesLoading[10]}
          row2_col7={listDosesLoading[12]}

          row3_col1={listDosesLoading[1]}
          row3_col2={listDosesLoading[3]}
          row3_col3={listDosesLoading[5]}
          row3_col4={listDosesLoading[7]}
          row3_col5={listDosesLoading[9]}
          row3_col6={listDosesLoading[11]}
          row3_col7={listDosesLoading[13]}
        />
      </div>

      <div>
        <ChartLine listDoseLoading={listDosesLoading} listDose={listDoses} />
      </div>

    </div>

  )
}

export default Dashboard;
