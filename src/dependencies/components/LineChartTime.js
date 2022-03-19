import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

/**
 * 
 * @param {*} param0 
 * @public
 * @returns {JSX}
 */

const LineChartTime = ({ datas }) => {
  const [averageTime, setAverageTime] = useState([]);
  const chartRef = useRef(null);

  // Get data from props
  useEffect(() => {
    if (datas.session?.sessions) {
      setAverageTime(datas.session?.sessions);
    }
  }, [datas]);

  // array of objects with kind and value
  const data = averageTime.map((item) => {
    return {
      weekDays: weekDays[item.day - 1],
      sessionLength: item.sessionLength,
    };
  });

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

  // change background on the right when mouse is over the line

  const onMouseMove = (hoveredData) => {
    const index = hoveredData.activeTooltipIndex;
    let percentage = ((index + 1) * 100) / 7;
    if (index === 0) percentage -= 20;
    else if (index === 1) percentage -= 12;
    else if (index === 2) percentage -= 10;
    else if (index === 3) percentage -= 7.5;
    else if (index === 4) percentage -= 5.5;
    else if (index === 5) percentage -= 2.7;
    else if (index === 6) percentage -= 0;
    chartRef.current.style.backgroundImage = `linear-gradient(90deg,#FF0000 0 ${percentage}%,#E60000 ${percentage}% 100%)`;
  };
  const onMouseOut = () => {
    chartRef.current.style.backgroundImage =
      "linear-gradient(90deg,#FF0000 0 100%,#E60000 100% 100%)";
  };

  return (
    <div className="linechartcontainer" ref={chartRef}>
    <h2>Durée moyenne des sessions</h2>
      <LineChart
        width={260}
        height={263}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 16 }}
        className="lineChart"
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
      >
        <defs>
          <linearGradient id="white-gradient" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="10%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="weekDays"
          stroke="rgba(255, 255, 255, 0.5)"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
          padding={{ left: 11, right: 9 }}
        />
        <YAxis hide={true} type="number" domain={["dataMin - 10", "dataMax + 40"]} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#fff"
          strokeWidth={2}
          dot={false}
          r={8}
          height={40}
          margin={{ top: 0, right: 0, left: 0, bottom: 40 }}
        />
      </LineChart>
    </div>
  );
};

LineChartTime.propTypes = {
  datas: PropTypes.shape({
    session: PropTypes.shape({
      sessions: PropTypes.any,
      weekDays: PropTypes.string,
      sessionLength: PropTypes.number
    })
  })
}

export default LineChartTime;
