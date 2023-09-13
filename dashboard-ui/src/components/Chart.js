import React from "react";
import { Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

const Chart = () => {
  const data = [
    { time: "8:00", pv: 304 },
    { time: "10:00", pv: 34 },
    { time: "12:00", pv: 500 },
    { time: "14:00", pv: 215 },
  ];

  return (
    <div>
      <LineChart
        height={300}
        width={450}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad">
            <stop
              stop-color="hsl(198, 69%, 40%)"
              stop-opacity="1"
              offset="0%"
            ></stop>
            <stop
              stop-color="hsl(189, 65%, 67%)"
              stop-opacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <filter
            id="nnneon-filter2"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="10 17"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <XAxis dataKey="time" stroke="hsl(189, 65%, 67%)" />
        <YAxis stroke="hsl(189, 65%, 67%)" />
        <Tooltip
          cursor={{ fill: "#02524b", opacity: "0.2" }}
          contentStyle={{
            border: "1px solid #02524b",
            borderRadius: "10px",
            backgroundColor: "#01203c",
          }}
        />

        <Line
          type="monotone"
          dataKey="pv"
          stroke="url(#nnneon-grad)"
          strokeWidth="4px"
          strokeLinecap="round"
        />
        <Line
          type="monotone"
          filter="url(#nnneon-filter2)"
          strokeWidth="2px"
          fillOpacity={0.3}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
