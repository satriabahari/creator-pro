"use client";

import Card from "@/common/components/elements/Card";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { months } from "@/utils/Utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  // responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Follower List",
    },
  },
};

// const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

const labels = months({ count: 7 });

export const data = {
  labels,
  datasets: [
    {
      label: "Followers",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
  // datasets: [
  //   {
  //     label: "Dataset 1",
  //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     backgroundColor: "rgba(255, 99, 132, 0.5)",
  //   },
  //   {
  //     label: "Dataset 2",
  //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     backgroundColor: "rgba(53, 162, 235, 0.5)",
  //   },
  // ],
};

const FollowerListCard = () => {
  return (
    <Card
      className="col-span-3"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-anchor="#dashboard"
    >
      <Bar options={options} data={data} />
    </Card>
  );
};

export default FollowerListCard;
