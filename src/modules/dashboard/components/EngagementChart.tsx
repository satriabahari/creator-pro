"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Card from "@/common/components/elements/Card";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Engagement",
    },
  },
};

const data = {
  labels: ["Likes", "Comments", "Shares"],
  datasets: [
    {
      label: "Total",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(54, 162, 235, 0.3)",
        "rgba(255, 99, 132, 0.3)",
        "rgba(255, 206, 86, 0.3)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const EngagementChart = () => {
  return (
    <Card
      className="col-span-1 flex items-center justify-center md:order-6 md:col-span-3"
      data-aos="fade-down"
      data-aos-delay="600"
      data-aos-anchor="#dashboard"
    >
      {/* <Doughnut data={data} /> */}
      <Pie options={options} data={data} />
    </Card>
  );
};

export default EngagementChart;
