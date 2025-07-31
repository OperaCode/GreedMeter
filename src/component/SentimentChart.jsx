// src/components/SentimentChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SentimentChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const chartData = {
    labels: data.map((d) =>
      new Date(d.timestamp * 1000).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Fear & Greed Index",
        data: data.map((d) => Number(d.value)),
        fill: true,
        backgroundColor: "rgba(34,197,94,0.2)", // greenish fill
        borderColor: "rgba(34,197,94,1)", // green border
        tension: 0.3,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Fear & Greed Index (Last 30 days)",
        color: "white",
        font: { size: 18, weight: "bold" },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "#444" },
      },
      y: {
        min: 0,
        max: 100,
        ticks: { color: "white", stepSize: 20 },
        grid: { color: "#444" },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default SentimentChart;
