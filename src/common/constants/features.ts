import { FeatureProps } from "../types/feature";

const FEATURE_ITEMS: FeatureProps[] = [
  {
    id: 1,
    title: "Flawless Responsiveness",
    description:
      "Your content, perfectly optimized for any screen size—whether it's desktop, tablet, or mobile.",
    image: "/images/mobile-responsive.png",
    aosType: "fade-right",
    colSpan: "lg:col-span-3",
    className: "h-[225px] w-[200px] rounded-md bg-top object-cover object-top",
    isShow: true,
  },
  {
    id: 2,
    title: "Effortless Integration",
    description:
      "Connect with your favorite tools and platforms seamlessly, making content management smoother than ever.",
    image: "/images/integrations.png",
    aosType: "fade-left",
    colSpan: "lg:col-span-3",
    className: "h-[225px] w-[200px] rounded-md bg-top object-cover object-top",
    isShow: true,
  },
  {
    id: 3,
    title: "Revenue at a Glance",
    description:
      "Track and analyze your earnings across various streams with a comprehensive revenue overview.",
    image: "/images/revanue-chart.png",
    aosType: "fade-up",
    aosDelay: 1 * 100 + 300,
    colSpan: "lg:col-span-2",
    className:
      "h-[200px] w-[300px] rounded-md border-2 border-neutral-500 object-cover",
    isShow: true,
  },
  {
    id: 4,
    title: "Dynamic Growth Tracking",
    description:
      " Watch your audience and content reach expand over time with detailed growth insights.",
    image: "/images/growth-chart.png",
    aosType: "fade-up",
    aosDelay: 2 * 100 + 300,
    colSpan: "lg:col-span-2",
    className:
      "h-[200px] w-[300px] rounded-md border-2 border-neutral-500 object-cover",
    isShow: true,
  },
  {
    id: 5,
    title: "Engagement Insights",
    description:
      "Measure your audience's interaction with detailed charts that show engagement trends and performance.",
    image: "/images/engagement-chart.png",
    aosType: "fade-up",
    aosDelay: 3 * 100 + 300,
    colSpan: "lg:col-span-2",
    className:
      "h-[200px] w-[300px] rounded-md border-2 border-neutral-500 object-cover",
    isShow: true,
  },
  // {
  //   id: 1,
  //   title: "Seamless Theme Switching: Light to Dark",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam labore fugit tempore ab qui molestias voluptatum possimus saepe doloribus",
  //   image: "/images/hero.jpg",
  //   ,
  //   isShow: true,
  // },
  // {
  //   id: 2,
  //   title: "Dashboard: Light to Dark",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam labore fugit tempore ab qui molestias voluptatum possimus saepe doloribus",
  //   image: "/images/hero.jpg",
  //   positionGrid: "order-first",
  //   // ,
  //
  //   isShow: true,
  // },
  // {
  //   id: 3,
  //   title: "Task: Light to Dark",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam labore fugit tempore ab qui molestias voluptatum possimus saepe doloribus",
  //   image: "/images/hero.jpg",
  //   // ,
  //
  //   isShow: true,
  // },
  // {
  //   id: 4,
  //   title: "Monetization: Light to Dark",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam labore fugit tempore ab qui molestias voluptatum possimus saepe doloribus",
  //   image: "/images/hero.jpg",
  //   positionGrid: "order-first",
  //   // ,
  //
  //   isShow: true,
  // },
];

export default FEATURE_ITEMS;
