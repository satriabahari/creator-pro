"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./dashboard/sidebar";
import HeaderDashboard from "./dashboard/header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 50,
      anchorPlacement: "top-center",
    });
  }, []);

  return (
    <>
      {!isDashboard ? (
        <>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="pb-4">
            <Header />
            <main className="px-16">{children}</main>
            {/* bug */}
            <Footer />
          </div>
        </>
      ) : (
        <div className="flex h-full min-h-screen gap-4 p-4">
          <Sidebar />
          <div className="flex w-full flex-col gap-4">
            <HeaderDashboard />
            <main>{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layouts;
