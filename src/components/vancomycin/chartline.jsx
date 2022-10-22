import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';


function ChartLine({ listDoseLoading, listDose }) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  let options = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: false,
      text: 'Sales Charts',
      fontColor: 'white',
    },
    legend: {
      labels: {
        fontColor: 'black',
      },
      align: 'end',
      position: 'bottom',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  };


  let data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    datasets: [
      {
        label: 'Concentración',
        data: listDose,
        borderColor: '#66bb6a',
        backgroundColor: '#D8F6CE',
        fill: false,
      },
      {
        label: 'Concentraciones (dosis de carga)',
        data: listDoseLoading,
        borderColor: '#6133FF',
        backgroundColor: '#CED8F6',
        fill: false,
      },
      {
        label: 'Rango Maximo',
        borderColor: '#9e9e9e',
        backgroundColor: '#9e9e9e',
        fill: false,
        data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
        pointRadius: 0
      },
      {
        label: 'Rango Minimo',
        borderColor: '#9e9e9e',
        backgroundColor: '#9e9e9e',
        fill: false,
        data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
        pointRadius: 0
      },
    ],
  };
  return (
    <div className=''>
      <div className='flex justify-center items-center pt-28'>
        <Card className='w-1/2 h-1/2 shadow-2xl shadow-[#1a237e] z-10'>
          <CardHeader
            variant='gradient'
            className='grid h-20 place-items-center shadow-lg shadow-[#0097a7] bg-[#0097a7]'
          >
            <h2 className="text-white text-2xl font-bold">Niveles de vancomicina</h2>
          </CardHeader>
          <CardBody>
            <div className="relative h-96">
              <Line options={options} data={data} />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ChartLine;
