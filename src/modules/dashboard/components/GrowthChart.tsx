"use client";

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

import Card from "@/common/components/elements/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Growth",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Views",
      data: [500, 400, 450, 600, 900, 700, 850, 1000, 950, 1050, 1200, 1100],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      fill: true,
      tension: 0.4,
      yAxisID: "y",
    },
    {
      label: "Followers",
      data: [200, 300, 550, 500, 700, 900, 800, 950, 1100, 1000, 1150, 1300],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: true,
      tension: 0.4,
      yAxisID: "y1",
    },
    {
      label: "Shares",
      data: [150, 350, 300, 450, 600, 500, 700, 850, 900, 950, 1100, 1050],
      borderColor: "rgba(255, 206, 86, 1)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      fill: true,
      tension: 0.4,
      yAxisID: "y1",
    },
  ],
};

interface SocialMediaStatsProps {
  colspan?: string;
}

const SocialMediaStats = ({ colspan }: SocialMediaStatsProps) => {
  return (
    <Card
      className="col-span-1 flex items-center justify-center md:order-7 md:col-span-6 lg:col-span-6"
      data-aos="fade-up"
      data-aos-delay="700"
      data-aos-anchor="#dashboard"
    >
      <Line options={options} data={data} />
    </Card>
  );
};

export default SocialMediaStats;
