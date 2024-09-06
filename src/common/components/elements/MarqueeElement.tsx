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
  return (
    <Marquee
      direction={direction}
      speed={75}
      // className={withPadding ? "py-3" : ""}
      pauseOnHover
      gradient
      gradientColor="#121212"
    >
      {children}
    </Marquee>
  );
};

export default MarqueeElement;
