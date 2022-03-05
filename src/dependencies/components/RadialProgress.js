import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const RadialProgress = ({ datas }) => {
  // Radial progress (1 circle) of todayScore(pourcentage) from rechart library
  const [todayScore, setTodayScore] = useState(0.12);

  useEffect(() => {
    if (datas.user?.todayScore) {
      setTodayScore(datas.user?.todayScore * 100);
    }
    console.log(todayScore, "todayScore");
  }, [datas, todayScore]);

  // change raduis of the bar
  

  return (
    <div>
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={'70%'}
        outerRadius={'100%'}
        barSize={12}
        startAngle={50}
        data={[ { name: 'Today', uv: todayScore, pv: 10, fill: 'red' }, { name: 'test', uv: 100, pv: 300, fill: 'white'  } ]}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
};
export default RadialProgress;
