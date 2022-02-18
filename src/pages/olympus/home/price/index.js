import React from 'react';
import { timestampToDate } from '../../../../utlils/date';
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export function PriceChart({timestamps, prices}) {
    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'OHM Price',
          },
        },
        
        animations: {
          borderWidth: {
            duration: 2000,
            easing: 'linear',
            from: 3,
            to: 1,
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time'
            },
          },
          y: {
            title: {
              display: true,
              text: 'USD'
            },
          },
          
        }
      };
      
      const labels = timestamps.map(timestamp => timestampToDate(timestamp));
      
      const data = {
        labels,
        datasets: [
          {
            label: 'OHM Price (in USD)',
            data: prices,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            
          }
        ],
      };
      
  return <Line options={options} data={data} />;
}
