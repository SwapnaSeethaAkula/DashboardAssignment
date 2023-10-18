// // App.js
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";
// import { useState } from "react";
// import { Data } from "./Data";
// // import "./styles.css";
// import PieChart from "./components/PieChart";
// import { BarChart } from "./components/BarChart";

// Chart.register(CategoryScale);
 
// export default function App() {

//   const maxEarnings = Math.max(...Data.map((data) => data.earnings));
//   const [chartData, setChartData] = useState({
//     labels: Data.map((data) => data.month), 
//     datasets: [
//       {
//         // label: "Users Gained ",
//         data: Data.map((data) => data.earnings),
//         backgroundColor: Data.map((data) =>
//           data.earnings === maxEarnings ? "	#8A2BE2" : "#E6E6FA"
//         ),
//         borderRadius: 10,
//       }
//     ]
//   });
 
//   return (
//     <div className="App">
//       <PieChart chartData={chartData} />
//       <BarChart chartData={chartData} />
//     </div>
//   );
// }
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
// import BarGraph from './components/BarGraph';

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      {/* <BarGraph /> */}
    </div>
  );
}

export default App;
