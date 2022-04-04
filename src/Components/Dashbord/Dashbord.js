import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashbord.css'
const Dashbord = () => {

    const data = [
        {
            "month": "Jan",
            "investment": 120000,
            "sell": 212,
            "revenue": 50401,
            "persentage": 35
        },
        {
            "month": "Feb",
            "investment": 260000,
            "sell": 212,
            "revenue": 100401,
            "persentage": 25
        },
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 154010,
            "persentage": 55
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 94500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 190010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 350900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 500000
        }
    ];


    return (
        <div className="chart-container bg-cyan-900 py-28">
            <div className='w-full flex justify-center py-16'>
                <BarChart className=' bg-yellow-300  rounded' width={630} height={250} data={data}>
                    <CartesianGrid className=' bg-slate-600' strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#011540" />
                    <Bar dataKey="revenue" fill="#63b896" />
                </BarChart>
            </div>

            <div className="flex justify-center pb-20 pt-6">
                <AreaChart className=' bg-yellow-300  rounded' width={630} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashbord;