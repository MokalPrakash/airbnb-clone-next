import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image src="/images/banner.jpg" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg sm:text-xl">Not sure where to go? Perfect.</p>
        <button className="bg-white px-10 py-4 rounded-full text-purple-500 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
