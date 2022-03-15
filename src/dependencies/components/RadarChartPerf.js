import PropTypes from "prop-types"
import React, { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";

const kinds = [
    "Cardio" , "Energie" , "Endurance" , "Force" , "Vitesse" , "Intensité"
];

const RadarChartPerf = ({ datas }) => {
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    if (datas.performance?.data) {
      setSessionData(datas.performance?.data);
    }
  }, [datas]);

  // array of objects with kind and value
  const data = sessionData.map((item) => {
    return {
      value: item.value,
      kind: kinds[item.kind - 1],
    };
  });

  return (
    <div className="radar">
      <RadarChart
        cx="50%" cy="50%" outerRadius="65%"  width={258} height={263} data={data} className="radarChart"
      >
        <PolarGrid  polarRadius={[10,21,45,65,90]} radialLines={false}/>
        <PolarAngleAxis dataKey="kind" tick={{ fontWeight: "500", fontSize: "12px" }} stroke="white" axisLine={false} tickLine={false}  />
        <Radar
          dataKey="value" stroke="rgba(255, 1, 1, 0.7)" fill="rgba(255, 1, 1, 0.7)"
        />
      </RadarChart>
    </div>
  );
};

RadarChartPerf.propTypes = {
  datas: PropTypes.shape({
    performance: PropTypes.shape({
      data: PropTypes.any,
      value: PropTypes.number,
      kind: PropTypes.object,
    })
  })
}

export default RadarChartPerf;
