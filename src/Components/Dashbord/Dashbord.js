import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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




    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];



    return (
        <div className="chart-container bg-cyan-800 ">
            <div className='w-full flex justify-center py-16'>
                <BarChart className=' bg-yellow-300  rounded' width={730} height={250} data={data}>
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
                <AreaChart className=' bg-yellow-300  rounded' width={730} height={250} data={data}
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

            <div className=" flex justify-center py-20">
                <PieChart className='bg-yellow-300 rounded-full' width={400} height={400}>
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#63b896" />
                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#011540" label />
                    <Tooltip />
                </PieChart>
            </div>

        </div>
    );
};

export default Dashbord;