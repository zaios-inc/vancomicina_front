import { useEffect } from 'react';
import Chart from 'chart.js';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';

function ChartLine({ listDoseLoading, listDose }) {

  useEffect(() => {

    var config = {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        datasets: [
          {
            label: "Concentración",
            backgroundColor: '#66bb6a',
            borderColor: '#66bb6a',
            data: listDose,
            fill: false,
          },
          {
            label: "Concentraciones (dosis de carga)",
            fill: false,
            backgroundColor: '#6133FF',
            borderColor: '#6133FF',
            data: listDoseLoading,
          },
          {
            label: "Rango Maximo",
            fill: false,
            backgroundColor: '#68676A',
            borderColor: '#68676A',
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
          },
          {
            label: "Rango Minimo",
            fill: false,
            backgroundColor: '#68676A',
            borderColor: '#68676A',
            data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
          },
        ],
      },
      options: {
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
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(17,17,17,.7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
                fontColor: 'white',
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(0, 0, 0, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(17,17,17,.7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
                fontColor: 'white',
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: 'rgba(17, 17, 17, 0.15)',
                zeroLineColor: 'rgba(33, 37, 41, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById('line-chart').getContext('2d');
    window.myLine = new Chart(ctx, config);
  }, [listDoseLoading, listDose]);

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
              <canvas id="line-chart"></canvas>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default ChartLine;
