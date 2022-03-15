import PropTypes from "prop-types"
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BarChartBody = ({ datas }) => {
  const [BodyFollow, setBodyFollow] = useState([]);

  useEffect(() => {
    if (datas.activity?.sessions) {
      setBodyFollow(datas.activity?.sessions);
    }
  }, [datas]);
  console.log(BodyFollow, "BodyFollow");

  // array of objects with day, kilogram and calories
    const data = BodyFollow.map((item, index) => {
        return {
            // counter for day
            day: index + 1,
            kilogram: item.kilogram,
            calories: item.calories,
        };
    });

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="tooltip">
              <p>{`${payload[0].value} kg`}</p>
              <p>{`${payload[1].value} kcal`}</p>
            </div>
          );
        }
        return null;
      };

  return (
    <div className="bar">
        <h2>Activité quotidienne</h2>
        <div className="barChartUnits">
            <span className="kg"><div></div><p>Poids (kg)</p></span>
            <span className="cal"><div></div><p>Calories brûlées (kCal)</p></span>
        </div>
      <BarChart
        width={770}
            height={270}
            data={data}
            margin={{
              top: 50,
              right: 10,
              left: 40,
              bottom: 5,
            }}
            barCategoryGap={35}
            barGap={8}  
               
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis tick={{ transform: 'translate(0, 16)', stroke: "#9B9EAC", fontWeight: "500", fontSize: "0.875rem" }} scale="auto" padding={{ left: -25, right: -25 }} tickLine={false} dataKey="day" axisLine={false} interval={0} />
        <YAxis yAxisId={"kil"} domain={["dataMin - 2", "dataMax + 1"]}   tick={{ transform: 'translate(10, 0)', stroke: "#9B9EAC", fontWeight: "500", fontSize: "0.875rem" }} tickMargin={20} tickLine={false} orientation="right" dataKey="kilogram" axisLine={false} padding={{ top: 0, bottom: -1 }} />
        <YAxis yAxisId={"cal"}  hide={true}  domain={["dataMin - 100", "dataMax"]}  />
        <Tooltip content={CustomTooltip} />
        <Bar yAxisId={"kil"}  dataKey="kilogram" fill="#000" radius={[50, 50, 0, 0]}  />
        <Bar yAxisId={"cal"} dataKey="calories" fill="#e60000" radius={[50, 50, 0, 0]} />
      </BarChart>
    </div>
  );
};

BarChartBody.propTypes = {
  datas: PropTypes.shape({
    activity: PropTypes.shape({
      sessions: PropTypes.any,
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
    })
  })
}

export default BarChartBody;