import InfoList from "./InfoList";
import RevanueChart from "./RevenueChart";
import EngagementChart from "./EngagementChart";
import Profile from "./Profile";
import SocialMediaStats from "./GrowthChart";

const Dashboard = () => {
  return (
    <div
      className="mt-20 grid gap-4 md:row-span-4 md:grid-cols-6 lg:row-span-3 lg:mb-12 lg:mt-28 lg:grid-cols-9 lg:overflow-hidden"
      id="dashboard"
    >
      <InfoList />
      <Profile />
      <RevanueChart />
      <EngagementChart />
      <SocialMediaStats />
    </div>
  );
};

export default Dashboard;
