// components/BarChart.js
import { Bar } from "react-chartjs-2";
import './chart.css';

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              ticks: {
                display: true,
              },
              grid: {
                display: false, 
              },
            },
            y: {
              display: false, 
            },
          },
          plugins: {
            title: {
              display: true,
              text:"Monthly earning",
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};