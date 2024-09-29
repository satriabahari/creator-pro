import Image from "next/image";

const ImageHero = () => {
  return (
    <div
      className="relative w-fit rounded-xl p-1"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Image
        src="/images/laptop-responsive.png"
        width={1200}
        height={1080}
        priority
        alt="laptop"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-anchor="#hero-image"
        className="h-full rounded-lg lg:max-w-5xl"
      />
      <Image
        src="/images/mobile-responsive.png"
        width={116}
        height={365}
        priority
        alt="mobile"
        data-aos="fade-down"
        data-aos-delay="600"
        data-aos-anchor="#hero-image"
        className="absolute bottom-0 left-0 hidden md:bottom-5 md:block lg:bottom-7"
      />
      <Image
        src="/images/ipad-responsive.png"
        width={229}
        height={564}
        priority
        alt="ipad"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-anchor="#hero-image"
        className="absolute bottom-0 right-0 hidden md:bottom-5 md:block lg:bottom-7"
      />
    </div>
  );
};

export default ImageHero;
