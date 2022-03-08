import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const weekDays = [ "L", "M", "M", "J", "V", "S", "D" ];

const LineChartTime = ({datas}) => {
    const [averageTime, setAverageTime] = useState([]);

    useEffect(() => {
        if (datas.session?.sessions) {
            setAverageTime(datas.session?.sessions);
        }
        console.log(averageTime, "averageTime");
    }, [averageTime, datas]);

// array of objects with kind and value
const data = averageTime.map((item) => {
    return {
        weekDays: weekDays[item.day - 1],  
        sessionLength: item.sessionLength, 
    };
  });
  console.log(data, "data");

// custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
};

    return (
        <div>
            <LineChart
      width={258} height={263} data={data}  margin={{ top: 50, right: 0, left: 0, bottom: 16 }}
    >
      <XAxis dataKey="weekDays" axisLine={false}  />
      <YAxis tick={false} axisLine={false}  />
      <Tooltip cursor={false} content={<CustomTooltip />}/>
      <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
    </LineChart>
        </div>
    );
};

export default LineChartTime;