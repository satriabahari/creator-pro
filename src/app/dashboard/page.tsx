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
        <h1 className="text-5xl font-semibold" data-aos="zoom-in">
          <span className="text-gradient-color">My Dashboard</span>: General Statistic
        </h1>
        <p
          className="text-neutral-400"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet consectetur. Elementum amet congue purus
          scelerisque.
        </p>
      </div>
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
