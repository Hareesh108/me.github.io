import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center justify-center min-h-screen max-w-screen-xl mt-16 md:mt-0 mx-4 xl:mx-auto">
      <div className="relative flex justify-center mx-24 sm:mx-32 md:mx-auto">
        <Image
          src="/profile/harsh01.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
          className="rounded-full border-primary shadow-transparent"
        />
      </div>
      <div className="flex flex-col gap-2  md:items-start mx-4 lg:mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-center md:text-start">
          Hi! I&apos;m Hareesh.
        </h1>
        <h4 className="text-xl text-center md:text-start">
          Creating a brighter tomorrow with technology and innovation.
        </h4>
        <p className="text-wrap text-center md:text-start">
          I am a passionate full-stack developer with expertise in building
          dynamic, responsive applications using modern frameworks and
          technologies. My experience spans across frontend technologies like
          React and TypeScript, as well as backend services with Java and Spring
          Boot.
        </p>
        <p className="text-lg text-center md:text-start">
          Full-Stack Developer | React | TypeScript | Java | Spring Boot
        </p>
      </div>
    </div>
  );
}
