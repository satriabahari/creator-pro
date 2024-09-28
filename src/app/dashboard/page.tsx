import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import SectionHeading from "@/common/components/elements/SectionHeading";
import Dashboard from "@/modules/dashboard";
import React from "react";

const DashboardPage = () => {
  return (
    <Container className="pb-28 pt-44">
      {/* <PageHeading
        title="My Blogs: Stories and Creators"
        description="Lorem ipsum dolor sit amet consectetur. Elementum amet congue purus scelerisque."
      /> */}
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-semibold lg:text-5xl" data-aos="zoom-in">
          <span className="text-gradient-color">Dashboard</span>: Full Control
          in One Place
        </h1>
        <p
          className="m-auto text-sm text-neutral-400 lg:w-1/2 md:w-3/4 lg:text-base"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Track your progress in real-time, analyze content performance, and
          manage platform integrations from our intuitive dashboard.
        </p>
      </div>
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
