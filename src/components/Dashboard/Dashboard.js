import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 justify-items-center'>
                <div>
                    <h3 className='font-bold text-center text-lg text-purple-700 mb-6'>Month Wise Sell</h3>
                    <LineChart width={300} height={250} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>

                <div>
                    <h3 className='font-bold text-lg text-center text-purple-700 mb-6'>Investment Vs Revenue</h3>
                    <AreaChart width={300} height={250} data={data} margin={{ left: 10, }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" stackId="1" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" stackId="1" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </div>

                <div>
                    <h3 className='font-bold text-center text-lg lg:mt-8 text-purple-700 mb-6'>Investment Vs Revenue</h3>
                    <BarChart width={300} height={250} data={data} margin={{ left: 10, }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar stackId="a" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Bar stackId="a" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div>
                    <h3 className='font-bold text-center text-lg md:mt-8 text-purple-700 '>Investment Vs Revenue</h3>
                    <PieChart width={350} height={350}  >
                        <Pie data={data} dataKey="investment" cx="50%" cy="40%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="40%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;