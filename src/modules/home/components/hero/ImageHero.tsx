import Image from "next/image";

const ImageHero = () => {
  return (
    <Image
      src="/images/hero.jpg"
      width={900}
      height={1080}
      alt="hero"
      className="overflow-hidden rounded-lg object-cover"
    />
  );
};

export default ImageHero;
