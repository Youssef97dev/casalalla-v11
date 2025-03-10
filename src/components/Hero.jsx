import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="relative bg-casa_bg w-full h-screen px-4 pb-2">
      <video
        className="object-cover h-full w-full block lg:hidden"
        autoPlay
        loop
        muted
      >
        <source src="/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ijf7z5lbtwayp94imo8s"
        height={500}
        width={1000}
        className="object-cover h-full w-full rounded-lg hidden lg:block"
      />
      {/* Overlay */}

      <Image
        src="/logo-2.png"
        height={150}
        width={150}
        className="absolute bottom-[38%] left-[30%] lg:left-[44%]  object-cover"
      />
    </div>
  );
};

export default Hero;
