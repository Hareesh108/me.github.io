import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CgPentagonDown } from "react-icons/cg";

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
        <h1 className="text-4xl sm:text-6xl font-bold text-center md:text-start">
          Hi! I&apos;m Hareesh.
        </h1>

        <h2 className="text-center md:text-start mt-2">
          Creating a brighter tomorrow with technology and innovation.
        </h2>

        <div className="flex justify-center md:justify-start  gap-4 mt-4">
          <Button className="text-lg" variant="secondary" size="lg">
            <CgPentagonDown size={50} /> Know more
          </Button>
          <a href="mailto:hareeshbhittam@email.com">
            <Button className="text-lg" variant="default" size="lg">
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
