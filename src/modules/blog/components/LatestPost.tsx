import Image from "next/image";

const LatestPost = () => {
  return (
    <div
      className="grid gap-8 lg:grid-cols-2"
      id="latestpost"
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-anchor="#latestpost"
    >
      <div className="bg-gradient-color rounded-2xl p-0.5">
        <Image
          src="/images/quality-content.jpg"
          alt="hero"
          width={500}
          height={300}
          className="h-[350px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <div
            className="mb-2 w-fit rounded-full border-2 border-amber-500 px-4 py-1 text-xs font-semibold text-amber-500"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-anchor="#latestpost"
          >
            Latest Post
          </div>
          <h3
            className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 lg:text-3xl"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-anchor="#latestpost"
          >
            How to Stay Consistent with Quality Content
          </h3>
          <p
            className="text-sm text-neutral-500 md:text-base"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-anchor="#latestpost"
          >
            This article explores a variety of strategies to help you
            consistently create and deliver high-quality content that resonates
            with your audience. You&apos;ll learn practical tips for maintaining
            content standards, ensuring relevance, and building engagement over
            time. By focusing on planning, consistency, and audience needs, you
            can establish a strong content strategy that not only attracts but
            also retains followers, ensuring long-term success for your brand or
            platform.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/images/satria-bahari.jpg"}
            className="h-10 w-10 rounded-full border-2 dark:border-neutral-700"
            width={24}
            height={24}
            alt="Satria Bahari"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-anchor="#latestpost"
          />
          <div className="flex flex-col">
            <p
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
              data-aos="fade-down"
              data-aos-delay="700"
              data-aos-anchor="#latestpost"
            >
              Satria Bahari
            </p>
            <span
              className="text-xs text-neutral-500"
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-anchor="#latestpost"
            >
              Jul 07, 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
