import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="bubble-gradient">
      <div
        className="w-fit rounded-xl border-2 border-neutral-300 p-2 dark:border-neutral-700"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Image
          src="/images/dashboard.png"
          width={1200}
          height={1080}
          priority
          alt="hero"
          className="h-full overflow-hidden rounded-lg object-cover lg:max-w-5xl"
        />
      </div>
    </div>
  );
};

export default ImageHero;
