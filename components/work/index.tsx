import React from "react";
import Image from "next/image";

export default function WorkPage() {
  return (
    <div className="max-w-screen-xl mt-6 md:mt-10 mx-4 xl:mx-auto">
      <div className="relative">
        <Image
          src="/assets/light-effect.svg"
          width={350}
          height={350}
          alt="left img"
          className="w-full"
        />
      </div>

      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-8 text-center">Work</h2>
      </div>
    </div>
  );
}
