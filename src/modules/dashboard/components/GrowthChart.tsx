"use client";

import Card from "@/common/components/elements/Card";
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
import faker from "faker";

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
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgba(153, 102, 255, 1)",

      backgroundColor: "rgba(153, 102, 255, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Followers",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.5))",
      yAxisID: "y1",
    },
    {
      label: "Shares",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgba(255, 206, 86, 1)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
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
      className="col-span-1 lg:col-span-6 md:col-span-6 md:order-7 flex  items-center justify-center "
      data-aos="fade-up"
      data-aos-delay="700"
      data-aos-anchor="#dashboard"
    >
      <Line options={options} data={data} />
    </Card>
  );
};

export default SocialMediaStats;
