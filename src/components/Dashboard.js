import React from 'react';
import './Dashboard.css';
import Customers from "../assets/images/customers_icon.svg";
import Arrow from "../assets/images/arrow_icon.svg";
import Sales from "../assets/images/sales.svg";
import Orders from "../assets/images/orders.svg";
import Balance from "../assets/images/balance.svg";
import { BarChart } from './BarChart';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../Data";
import newCustomersImage from "../assets/images/newCustomers.png";

Chart.register(CategoryScale);

const menuItems = [
  {
    icon: Customers,
    text: "Dashboard",
  },
  {
    icon: Customers,
    text: "Product",
  },
  {
    icon: Customers,
    text: "Customers",
  },
  {
    icon: Customers,
    text: "Income",
  },
  {
    icon: Customers,
    text: "Promote",
  },
  {
    icon: Customers,
    text: "Help",
  },
];

const cardItems = [
    {
        heading:"Earning",
        Amount:"$198k",
        percent:"37.8% this month",
        image: Customers,
    },
    {
        heading:"Orders",
        Amount:"$2.4k",
        percent:"2% this month",
        image: Orders,
    },
    {
        heading:"Balance",
        Amount:"$2.4k",
        percent:"2% this month",
        image: Balance,
    },
    {
        heading:"Total Sales",
        Amount:"$89k",
        percent:"11% this month",
        image: Sales,
    }
];

  

const Dashboard = () => {

    const maxEarnings = Math.max(...Data.map((data) => data.earnings));
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month), 
    datasets: [
      {
        data: Data.map((data) => data.earnings),
        backgroundColor: Data.map((data) =>
          data.earnings === maxEarnings ? "	#8A2BE2" : "#E6E6FA"
        ),
        borderRadius: 10,
      }
    ]
  });

  return (
    <div className='container'>
      <div className='sidebar'>
        <h1>Dashboard</h1>
        <div className='menu-list'>
          {menuItems.map((item, index) => (
            <div className='menu' key={index}>
              <div className='menu-item'>
                <img src={item.icon} alt={item.text} />
                <p className='para'>{item.text}</p>
              </div>
              <img src={Arrow} className='arrow-icon' alt="Arrow" />
            </div>
          ))}
        </div>
        <div>
        </div>
      </div>
      <div className='mainboard'>
        <div className='header'>
            <p className='heading'>Hello Shahrukh👋🏻,</p>
            <input className="search" type="search" placeholder="Search..." style={{ marginLeft: "auto" }} />
        </div>
        <div className='card-area'>
        {cardItems.map((item,index) => (
            <div className='card'>
                <img src={item.image} alt='item' className='image' />
                <div className='data'>
                    <p className='paragraph1'>{item.heading}</p>
                    <p className='paragraph2'>{item.Amount}</p>
                    <p className='paragraph3'>{item.percent}</p>
                </div>
            </div>))}
        </div>
        <div className='charts'>
        <div className='barchart'>
            <BarChart chartData={chartData} />
        </div>
        <div className='new-img'>
            <img src={newCustomersImage} className='new-custom'/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
