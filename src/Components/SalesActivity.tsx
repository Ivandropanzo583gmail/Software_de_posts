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
            borderColor: "#7c3aed",
            backgroundColor: "rgba(124, 58, 237, 0.1)", // roxo com transparência
            tension: 0.5,
            fill: true,
            pointBackgroundColor: "#7c3aed",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 4,
          },
        ],
      },
      options: {
        layout: {
          padding: 10,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#6b7280",
              font: {
                size: 12,
              },
            },
          },
          y: {
            grid: {
              color: "#e5e7eb",
            },
            ticks: {
              color: "#6b7280",
              font: {
                size: 12,
              },
              beginAtZero: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#111827", // tooltip escura
            titleColor: "#ffffff",
            bodyColor: "#d1d5db",
            cornerRadius: 4,
            titleFont: { size: 14 },
            bodyFont: { size: 12 },
          },
        },
        responsive: true,
      },
    };

    const fetchChart = async () => {
      try {
        const res = await axios.get("https://quickchart.io/chart", {
          params: {
            c: JSON.stringify(chartConfig),
            format: "png",
            width: 640,
            height: 260,
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
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold text-gray-800">Sales Activity</h2>
        <button className="text-sm text-gray-500 border px-3 py-1 rounded hover:bg-gray-100 transition">
          Export CSV
        </button>
      </div>

      <div className="text-2xl font-bold mb-4 text-purple-600">₦715,000</div>

      {chartUrl ? (
        <img
          src={chartUrl}
          alt="Sales Chart"
          className="w-full h-auto object-contain rounded-md"
        />
      ) : (
        <p className="text-gray-400 text-sm">Carregando gráfico...</p>
      )}
    </div>
  );
}
