"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// import Footer from "./footer/Footer";
// import Header from "./header/Header";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();
  const isFullPage = ["/auth/login", "/auth/register"].includes(pathname);

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 50,
      anchorPlacement: "top-center",
      once: true,
    });
  }, []);

  return (
    <>
      {!isFullPage ? (
        <>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="pb-4">
            {/* <Header /> */}
            <main className="px-8 lg:px-16">{children}</main>
            {/* <Footer /> */}
          </div>
        </>
      ) : (
        <div>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]" />
          <main>{children}</main>
        </div>
      )}
    </>
  );
};

export default Layouts;
