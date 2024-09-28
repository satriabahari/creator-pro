const Copyright = () => {
  return (
    <footer
      className="text-center text-xs text-neutral-500 lg:text-sm"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-anchor="#footer"
    >
      ©{new Date().getFullYear()} Content Creators. All rights reserved.
    </footer>
  );
};

export default Copyright;
