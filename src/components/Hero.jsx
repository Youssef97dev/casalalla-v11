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
        src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hg0ykixiwpvehv9hdm4s"
        height={2000}
        width={2000}
        className="object-cover h-full w-full hidden lg:block mt-2"
      />
      {/* Overlay */}

      <Image
        src="/logo-2.png"
        height={150}
        width={150}
        className="absolute bottom-[38%] left-[30%] object-cover block lg:hidden"
      />
      <Image
        src="/logo-2.png"
        height={250}
        width={250}
        className="absolute bottom-[38%] left-[44%] object-cover hidden lg:block"
      />
    </div>
  );
};

export default Hero;
