import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center min-h-screen max-w-screen-xl mx-auto">
      <div className="relative flex sm:justify-center md:justify-start">
        <Image
          src="/profile/harsh01.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
          className="rounded-lg border-4 border-primary shadow-lg"
        />
      </div>
      <div className="flex flex-col gap-2 md:items-start">
        <h1 className="text-6xl font-bold">Hi! I&apos;m Hareesh.</h1>
        <h4 className="text-xl">
          Creating a brighter tomorrow with technology and innovation.
        </h4>
        <p>
          I am a passionate full-stack developer with expertise in building
          dynamic, responsive applications using modern frameworks and
          technologies. My experience spans across frontend technologies like
          React and TypeScript, as well as backend services with Java and Spring
          Boot.
        </p>
        <p className="text-lg">
          Full-Stack Developer | React | TypeScript | Java | Spring Boot
        </p>
      </div>
    </div>
  );
}
