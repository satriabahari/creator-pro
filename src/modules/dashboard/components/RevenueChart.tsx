"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import Card from "@/common/components/elements/Card";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Revanue",
    },
  },
};

export const data = {
  labels: ["Sponsorship", "Ads", "Subscriptions"],
  datasets: [
    {
      label: "Total",
      data: [12, 19, 10],
      backgroundColor: [
        "rgba(75, 192, 192, 0.3)",
        "rgba(153, 102, 255, 0.3)",
        "rgba(255, 159, 64, 0.3)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const RevenueChart = () => {
  return (
    <Card
      className="col-span-1 flex items-center justify-center md:col-span-3 md:order-5"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-anchor="#dashboard"
    >
      <PolarArea data={data} options={options} />
    </Card>
  );
};

export default RevenueChart;
