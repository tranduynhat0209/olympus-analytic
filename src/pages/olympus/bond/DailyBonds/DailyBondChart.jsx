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


export function DailyBondsChart({timestamps, bondsData, token}) {
    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Daily Bonds',
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
              text: token
            },
          },
          
        }
      };
      
      const labels = timestamps.map(timestamp => timestampToDate(timestamp)).reverse();
      
      const data = {
        labels,
        datasets: [
          {
            fill: false,
            label: 'Daily Bonds',
            data: bondsData.reverse(),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }
        ],
      };
      
  return <Line options={options} data={data} />;
}
