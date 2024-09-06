import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="bubble-gradient">
      <div className="w-fit rounded-xl border-2 p-2 dark:border-neutral-700">
        <Image
          src="/images/dashboard.png"
          width={1200}
          height={1080}
          alt="hero"
          className="h-full max-w-5xl overflow-hidden rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ImageHero;
