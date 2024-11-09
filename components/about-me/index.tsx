import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
export default function AboutMePage() {
  return (
    <div
      id="about-me"
      className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center md:items-start justify-center  max-w-screen-xl mx-4 xl:mx-auto bg-muted px-6 py-10 md:py-8 rounded-xl"
    >
      <div className="flex flex-col gap-2 items-center md:items-start mx-4 lg:mx-auto">
        <div className="flex justify-center items-center rounded-full text-primary bg-primary-100 border-[10px] border-primary-50 w-14 h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>

        <h1 className="text-4xl font-bold">About Me.</h1>

        {/* <h4 className="text-xl text-wrap text-start">
          I am a passionate full-stack developer with expertise in building
          dynamic, responsive applications using modern frameworks and
          technologies.
        </h4> */}

        <p className="text-lg md:text-xl text-center">
          I’m a Software Developer at{" "}
          <a href="https://reldyn.co" target="_black">
            <span className="text-primary hover:text-pink-600 font-bold">
              RELDYN
            </span>
          </a>
          {""}.
        </p>

        <div className="flex space-x-4 justify-center mt-2 md:mt-0">
          <Link
            href="https://www.linkedin.com/in/hareeshbhittam/"
            target="_blank"
          >
            <FaLinkedin
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
          <Link href="https://x.com/hareesh_bhittam" target="_blank">
            <FaTwitter
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
          <Link href="https://github.com/Hareesh108" target="_blank">
            <FaGithub
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
          <Link href="https://www.instagram.com/_harsh_20.6/" target="_blank">
            <FaInstagram
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-start mx-4 lg:mx-auto">
        <h1 className="text-lg md:text-3xl font-bold">Hire me as developer.</h1>

        <p className="opacity-70">
          With extensive experience in building production ready applications.{" "}
          <br /> I am well equipped to bring your next project to life with
          precision and care. Let’s work together to create something
          exceptional.
        </p>
      </div>

      <div className="flex flex-col gap-2 mx-4 lg:mx-auto">
        <h1 className="text-lg md:text-3xl font-bold">Book a consultation.</h1>

        <p className="opacity-70">
          Looking for guidance on your project? Book a consultation to gain
          valuable insights and clarity for your next steps.{" "}
        </p>
      </div>
    </div>
  );
}
