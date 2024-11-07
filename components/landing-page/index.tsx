import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center justify-center min-h-screen max-w-screen-xl mt-16 md:mt-0 mx-4 xl:mx-auto">
      <div className="relative flex justify-center mx-24 sm:mx-32 md:mx-auto">
        <div className="relative">
          <Image
            src="/assets/test4.svg"
            alt="Overlay Image"
            width={500}
            height={500}
          />
          <Image
            src="/profile/harsh01.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-full border-primary shadow-transparent absolute top-0 left-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2  md:items-start mx-4 lg:mx-auto">
        <h1 className="sm:text-6xl font-bold text-center md:text-start">
          Hi! I&apos;m Hareesh.
        </h1>

        <h2 className="text-center md:text-start mt-2">
          Creating a brighter tomorrow with technology and innovation.
        </h2>
      </div>
    </div>
  );
}
