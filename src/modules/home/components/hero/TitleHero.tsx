const TitleHero = () => {
  return (
    <div
      className="flex flex-col items-center space-y-2 text-center md:space-y-4 lg:space-y-5"
      data-aos="zoom-in"
      data-aos-anchor="#hero"
    >
      <h1 className="text-4xl font-bold leading-tight text-neutral-700 dark:text-neutral-300 md:text-5xl lg:text-6xl">
        Empowering <br />
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Creators
        </span>
        , Amplifying Impact
      </h1>
      <h5
        className="text-xs text-neutral-500 dark:text-neutral-400 md:w-2/3 md:text-sm lg:text-base"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        CreatePro is an all-in-one platform designed for content creators, from
        beginners to pros, to build, manage, and monetize their work. Start your
        creative journey with industry-leading tools and features.
      </h5>
    </div>
  );
};

export default TitleHero;
