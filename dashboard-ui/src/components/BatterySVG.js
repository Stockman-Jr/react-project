import React from "react";
import "../App.css";

const BatterySVG = ({ radius, strokeWidth, progress, isCharging }) => {
  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const offset = ((100 - progress) / 100) * circumference;
  return (
    <div className="SvgBox">
      <svg width="200" height="750" viewBox="-10 -100 80 80">
        <defs>
          <linearGradient id="progressGradient" gradientTransform="rotate(10)">
            <stop offset="0%" stopColor="#ba2e18" />
            <stop offset="100%" stopColor="#53ba18" />
          </linearGradient>

          <linearGradient
            id="batteryGradient"
            gradientTransform="rotate(225 .5 .5)"
          >
            <stop offset="0%" stop-color="#0d4d66" />
            <stop offset="100%" stop-color="#4ee1f5" />
          </linearGradient>
        </defs>

        <circle
          cx="30"
          cy="40"
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke="#303030"
          strokeOpacity="0.5"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="40"
          cy="50"
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke="url(#batteryGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(90 ${radius} ${radius})`}
        />

        <circle
          r="20"
          cx="30"
          cy="-180"
          fill="none"
          stroke="#52def7"
          strokeWidth="2"
        />

        <g
          id="flow-animation"
          className={isCharging ? "path-ani" : null}
          fill="none"
          stroke="#52def7"
          strokeWidth="2px"
          strokeOpacity={0}
          strokeDashoffset={2000}
          strokeLinecap="round"
          strokeDasharray="5,50"
        >
          <circle
            r="20"
            cx="30"
            cy="-180"
            fill="none"
            stroke="#52def7"
            strokeWidth="2"
          />
          <line x1="30" y1="0" x2="30" y2="-160" />
        </g>
        <circle
          r="20"
          cx="30"
          cy="-180"
          fill="none"
          stroke="#52def7"
          strokeWidth="2"
        />
        <line
          x1="30"
          y1="0"
          x2="30"
          y2="-160"
          stroke="#14dcff"
          strokeWidth="2px"
          strokeOpacity="0.7"
        />

        <text font-size="13" textAnchor="middle" stroke="white" x="30" y="45">
          {progress}%
        </text>
      </svg>
      {/*
      <svg width="200" height="75" viewBox="0 0 80 80">
        <g>
          <rect x="-60" y="15" width="100" height="2" fill="#14dcff"></rect>
          <rect
            x="40"
            y="0"
            width="100"
            height="30"
            fill="none"
            stroke="#14dcff"
            strokeWidth="2px"
          ></rect>
        </g>
      </svg>
*/}
    </div>
  );
};

export default BatterySVG;
