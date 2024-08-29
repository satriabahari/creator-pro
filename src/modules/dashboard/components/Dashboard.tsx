import React from "react";
import InfoList from "./InfoList";
import TaskListCard from "./TaskListCard";
import FollowerListCard from "./FollowerListCard";
import VisitListCard from "./VisitListCard";
import SocialMediaStats from "./SocialMediaStats";

const Dashboard = () => {
  return (
    <div className=" space-y-4">
      <InfoList />
      <div className="grid grid-cols-3 gap-4">
        <TaskListCard />
        <FollowerListCard />
        <VisitListCard />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <SocialMediaStats />
        <FollowerListCard />
      </div>
    </div>
  );
};

export default Dashboard;
