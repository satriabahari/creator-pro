'use client'

import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

interface MarqueeElementProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  withPadding?: boolean;
}

const MarqueeElement = ({
  children,
  direction = "left",
  withPadding = true,
}: MarqueeElementProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Marquee
      direction={direction}
      speed={75}
      // className={withPadding ? "py-3" : ""}
      pauseOnHover
      gradient
      gradientColor={resolvedTheme === "dark" ? "#121212" : "#ffffff"}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeElement;
