import React, { useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";

const RadialProgress = ({ datas }) => {
  // Radial progress (1 circle) of todayScore(pourcentage) from rechart library
  const [todayScore, setTodayScore] = useState(0);

  useEffect(() => {
    if (datas.user?.todayScore) {
      setTodayScore(datas.user?.todayScore * 100);
    }
    console.log(todayScore, "todayScore");
  }, [datas, todayScore]);
  

  return (
    <div className="radialprogress">
      <h3 className="score">Score</h3>
      <div className="text">
       <h2 className="todayscore">{todayScore}%</h2>
       <p >de votre objectif</p> 
      </div>
      
      <PieChart className="piechart" width={300} height={300}>
        <Pie className="pie"
          dataKey="value"
          data={[
            { value: todayScore, fill: "red" },
            { value: 100 - todayScore, fill: "white" },
          ]}
          cx={75}
          cy={110}
          labelLine={false}
          label={false}
          startAngle={60}
          endAngle={360}
          innerRadius={70}
          outerRadius={80}
          cornerRadius={10}
          isAnimationActive={false}
          fill="#8884d8"
        />
        </PieChart>
        
    </div>
  );
};
export default RadialProgress;
