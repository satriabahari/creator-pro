import React from "react";
import InfoList from "./InfoList";
import FollowerListCard from "./FollowerListCard";
import VisitListCard from "./VisitListCard";
import Profile from "./Profile";
import SocialMediaStats from "./SocialMediaStats";

const Dashboard = () => {
  return (
    <div className="row-span-3 my-28 grid grid-cols-9 gap-4" 
    id="dashboard"
    
    >
      <InfoList />
      <Profile />
      {/* <TaskListCard /> */}
      <FollowerListCard />
      <VisitListCard />
      <SocialMediaStats />
    </div>
  );
};

export default Dashboard;
