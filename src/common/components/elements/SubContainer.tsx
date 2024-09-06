'use client'

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

interface SubContainerProps {
  children: React.ReactNode;
  className?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const SubContainer = ({
  children,
  className = "",
  ...others
}: SubContainerProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <div className={`${className}`} {...others}>
      {children}
    </div>
  );
};

export default SubContainer;
