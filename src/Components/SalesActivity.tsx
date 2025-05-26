"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function SalesActivity() {
  const [chartUrl, setChartUrl] = useState("");

  useEffect(() => {
    const chartConfig = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Vendas",
            data: [100, 200, 150, 300, 250, 320, 280, 400],
            borderColor: "#7c3aed", // roxo forte (Tailwind: purple-600)
            backgroundColor: "transparent",
            tension: 0.4, // curva suave
            pointBackgroundColor: "#7c3aed",
            pointBorderWidth: 2,
            pointRadius: 4,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#6b7280", // gray-500
              font: {
                size: 12,
              },
            },
          },
          y: {
            grid: {
              color: "#e5e7eb", // gray-200
            },
            ticks: {
              color: "#6b7280",
              font: {
                size: 12,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    const fetchChart = async () => {
      try {
        const res = await axios.get("https://quickchart.io/chart", {
          params: {
            c: JSON.stringify(chartConfig),
            format: "png",
            width: 500,
            height: 200,
            backgroundColor: "white",
          },
          responseType: "blob",
        });

        const imageUrl = URL.createObjectURL(res.data);
        setChartUrl(imageUrl);
      } catch (error) {
        console.error("Erro ao carregar gráfico:", error);
      }
    };

    fetchChart();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Sales Activity</h2>
        <button className="text-sm text-gray-500 border px-2 py-1 rounded">Export CSV</button>
      </div>
      <div className="text-2xl font-bold mb-4">₦715,000</div>

      {chartUrl ? (
        <img src={chartUrl} alt="Sales Chart" className="w-full h-auto max-h-60 object-contain" />
      ) : (
        <p className="text-gray-400 text-sm">Carregando gráfico...</p>
      )}
    </div>
  );
}
