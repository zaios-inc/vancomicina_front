import React from 'react'
import ChartLine from './vancomycin/chartline';
import InfoCard from './vancomycin/infoCard';
import Table from './vancomycin/table';
import Vaccine from '../images/vaccine.png'

function Dashboard() {
  return (
    <div className='pt-14 pb-28 px-3 md:px-8 h-auto'>
      <div className='container mx-auto max-w-full '>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
          <InfoCard
            color='white'
            headerIcon={Vaccine}
            title='Aclaramiento'
            amount='2,44'
            footerContent='L/h'
            footerContentColor='green'
          />
          <InfoCard
            color='cyan'
            headerContent='Vd'
            title='Volumen distribución'
            amount='75'
            footerContent='L'
            footerContentColor='green'
          />
          <InfoCard
            color='teal'
            headerContent='Ke'
            title='Constante eliminación'
            amount='0,03250'
            footerContent='h-1'
            footerContentColor='green'
          />
          <InfoCard
            color='blue'
            headerContent='Auc'
            title='Área bajo la curva'
            amount='405'
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

          row2_col1={''}
          row2_col2={''}
          row2_col3={''}
          row2_col4={''}
          row2_col5={''}
          row2_col6={''}
          row2_col7={''}

          row3_col1={''}
          row3_col2={''}
          row3_col3={''}
          row3_col4={''}
          row3_col5={''}
          row3_col6={''}
          row3_col7={''}
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

          row2_col1={''}
          row2_col2={''}
          row2_col3={''}
          row2_col4={''}
          row2_col5={''}
          row2_col6={''}
          row2_col7={''}

          row3_col1={''}
          row3_col2={''}
          row3_col3={''}
          row3_col4={''}
          row3_col5={''}
          row3_col6={''}
          row3_col7={''}
        />
      </div>

      <div>
        <ChartLine />
      </div>

    </div>

  )
}

export default Dashboard;
