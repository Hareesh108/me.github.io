"use client";

import React from "react";
import InfiniteCarousel from "../carousel";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiReacthookform } from "react-icons/si";
import { SiEslint } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { BsFillCloudsFill } from "react-icons/bs";
import { SiGooglecloud } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { RiNodejsLine } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";

// import Image from "next/image";
// import { useTheme } from "next-themes";

export default function WorkPage() {
  // const { resolvedTheme } = useTheme();
  // const [mounted, setMounted] = React.useState(false);

  // React.useEffect(() => setMounted(true), []);

  // const isDarkMode = resolvedTheme === "dark" && mounted;
  // const isLightMode = resolvedTheme === "light" && mounted;

  return (
    <div id="skills" className="max-w-screen-xl mt-6 md:mt-10 mx-4 xl:mx-auto">
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-center">
          <svg width="66" height="100" xmlns="http://www.w3.org/2000/svg">
            {/* Text */}
            <text
              x="10"
              y="40"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              stroke="currentColor"
              fill="none"
            >
              Work
            </text>

            {/* Gradient Definition */}
            <defs>
              <linearGradient
                id="glowing-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#EB8317" stopOpacity="1">
                  <animate
                    attributeName="stop-color"
                    values="#EB8317; #F4F6FF; #EB8317"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#F4F6FF" stopOpacity="1">
                  <animate
                    attributeName="stop-color"
                    values="#F4F6FF; #EB8317; #F4F6FF"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            {/* Glowing Gradient Line */}
            <rect
              x="10"
              y="50"
              width="200"
              height="4"
              fill="url(#glowing-gradient)"
            />
          </svg>
        </div>

        <div className="w-full space-y-8 px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-6 ">
            <div>
              <strong className="underline">
                Developed and maintained a Back Office Portal for Bank Employees
              </strong>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Built a secure, high-performance portal to streamline
                administrative tasks.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Integrated role-based access control (RBAC) for secure data
                handling.
              </p>
            </div>

            <div>
              <strong className="underline">
                Frontend Development with Modern Web Technologies
              </strong>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Utilized{" "}
                <span className="font-semibold text-classic">
                  React, Next.js
                </span>{" "}
                and{" "}
                <span className="font-semibold text-classic">TypeScript</span>{" "}
                for responsive, user-friendly interfaces.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Implemented{" "}
                <span className="font-semibold text-classic">
                  Redux, React-hook-form, Yup, Zod, Chakra UI, Framer motion
                </span>{" "}
                and{" "}
                <span className="font-semibold text-classic">Material-UI</span>{" "}
                for consistent, accessible UI components.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Managed state efficiently and optimized API data handling.
              </p>
            </div>

            <div>
              <strong className="underline">
                Backend Development Using Java (Spring Boot) and Node.js
              </strong>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Developed scalable REST APIs with{" "}
                <span className="font-semibold text-classic">Spring Boot</span>{" "}
                to handle high-traffic operations.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Implemented data security with{" "}
                <span className="font-semibold text-classic">
                  Keycloak [Identity and Access Management (IAM)]
                </span>{" "}
                and JWT authentication.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Integrated{" "}
                <span className="font-semibold text-classic">PostgreSQL</span>{" "}
                as the primary relational database for data storage.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Utilized{" "}
                <span className="font-semibold text-classic">Redis</span> for
                caching to improve performance and reduce database load.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Enhanced data processing for real-time banking operations.
              </p>
            </div>

            <div>
              <strong className="underline">
                Collaborated with Cross-functional Teams
              </strong>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Worked closely with product managers, designers, and QA for
                quality assurance.
              </p>
              <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
                Conducted code reviews, contributed to documentation, and
                ensured seamless project handover.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <InfiniteCarousel
          items={[
            <SiTypescript
              key={0}
              className="text-primary hover:text-destructive h-[34px] w-[34px]"
            />,
            <IoLogoJavascript
              key={1}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <TbBrandReact
              key={2}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <RiNextjsFill
              key={3}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <TbBrandRedux
              key={4}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <SiReacthookform
              key={5}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <SiEslint
              key={6}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <SiReactrouter
              key={7}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <FaAngular
              key={8}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <FaAws
              key={9}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <BsFillCloudsFill
              key={10}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <SiGooglecloud
              key={11}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <FaJenkins
              key={12}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <SiGithubactions
              key={13}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <FaGitSquare
              key={14}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <RiJavaLine
              key={15}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <SiSpringboot
              key={16}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <BiLogoPostgresql
              key={17}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <DiRedis
              key={18}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <RiNodejsLine
              key={19}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <FaGolang
              key={20}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
            <FaRust
              key={21}
              className="text-primary hover:text-destructive h-10 w-10"
            />,
          ]}
        />
      </div>
    </div>
  );
}
