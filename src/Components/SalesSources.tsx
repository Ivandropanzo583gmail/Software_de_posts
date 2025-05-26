import React from "react";

type Source = {
  name: string;
  value: number; // percentual
  color: string;
};

const data: Source[] = [
  { name: "Direct", value: 50, color: "#8b5cf6" },   // lilás
  { name: "Facebook", value: 30, color: "#fb923c" }, // laranja
  { name: "Instagram", value: 20, color: "#22c55e" } // verde
];

const radius = 16;
const circumference = 2 * Math.PI * radius;
const strokeWidth = 6;
const gap = 1.8; // espaço entre fatias para evitar sobreposição com strokeLinecap round

function calculateDash(value: number) {
  return (value / 100) * circumference;
}

export default function SalesSources(): JSX.Element {
  let offset = 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-md font-semibold mb-4">Sales Sources</h2>

      <div className="flex items-center justify-center">
        <svg
          viewBox="0 0 36 36"
          className="w-36 h-36 -rotate-90"
        >
          {data.map(({ value, color }, index) => {
            // Calcula comprimento da fatia menos o gap para arredondar direito
            const rawDash = calculateDash(value);
            const dash = rawDash - gap;
            // offset atualizado com o dash + gap para "pular" espaço de arredondamento
            const strokeDasharray = `${dash} ${circumference - dash}`;
            const strokeDashoffset = circumference - offset;

            // Atualiza offset para próxima fatia com gap incluído
            offset += rawDash;

            return (
              <circle
                key={index}
                cx="18"
                cy="18"
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

      <ul className="mt-4 text-sm space-y-2">
        {data.map(({ name, value, color }, index) => (
          <li key={index}>
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: color }}
            ></span>
            {name} - {value}%
          </li>
        ))}
      </ul>
    </div>
  );
}
