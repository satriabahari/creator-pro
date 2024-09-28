import React from "react";
import InfoList from "./InfoList";
import RevanueChart from "./RevenueChart";
import EngagementChart from "./EngagementChart";
import Profile from "./Profile";
import SocialMediaStats from "./GrowthChart";

const Dashboard = () => {
  return (
    <div
      className="mt-20 grid gap-4 lg:overflow-hidden  lg:row-span-3 lg:mb-12 lg:mt-28 md:grid-cols-6 md:row-span-4 lg:grid-cols-9"
      id="dashboard"
    >
      <InfoList />
      <Profile />
      {/* <TaskListCard /> */}
      <RevanueChart />
      <EngagementChart />
      <SocialMediaStats />
    </div>
  );
};

export default Dashboard;
