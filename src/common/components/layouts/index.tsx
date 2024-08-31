"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./dashboard/sidebar";
import HeaderDashboard from "./dashboard/header";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";
  return (
    <>
      {!isDashboard ? (
        <div className="px-16 pb-4">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
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
