import React from "react";

type Source = {
  name: string;
  value: number;
  color: string;
};

const data: Source[] = [
  { name: "Direct", value: 50, color: "#8b5cf6" },   // lilás
  { name: "Facebook", value: 30, color: "#fb923c" }, // laranja
  { name: "Instagram", value: 20, color: "#22c55e" } // verde
];

const radius = 14;
const strokeWidth = 10;
const circumference = 2 * Math.PI * radius;
const gap = 2;

function calculateDash(value: number) {
  return (value / 100) * circumference;
}

export default function SalesSources(): JSX.Element {
  let offset = 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Sales Sources</h2>
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-40 h-40 -rotate-90">
          {data.map(({ value, color }, index) => {
            const rawDash = calculateDash(value);
            const dash = rawDash - gap;
            const strokeDasharray = `${dash} ${circumference - dash}`;
            const strokeDashoffset = circumference - offset;

            offset += rawDash;

            return (
              <circle
                key={index}
                cx="20"
                cy="20"
                r={radius}
                fill="transparent"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>

      <ul className="mt-6 text-sm space-y-3">
        {data.map(({ name, value, color }, index) => (
          <li key={index} className="flex items-center">
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: color }}
            ></span>
            <span className="text-gray-700 font-medium">{name}</span>
            <span className="ml-auto text-gray-500">{value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
