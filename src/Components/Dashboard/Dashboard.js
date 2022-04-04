import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('dash.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])


    return (
      
       
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', margin:'100px'}}>
                <BarChart width={700} height={400} data={data}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
              <Legend  width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              
             <Bar dataKey="investment" stackId="a" fill="#8884d8" />
             <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>


            
        <PieChart width={400} height={400}>
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>


        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip /> 

          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
        
        </AreaChart>
  
            </div>
          



        
    );
};

export default Dashboard;