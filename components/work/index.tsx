"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function WorkPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark" && mounted;
  const isLightMode = resolvedTheme === "light" && mounted;

  return (
    <div className="max-w-screen-xl mt-6 md:mt-10 mx-4 xl:mx-auto">
      <div className="relative">
        {isDarkMode && (
          <Image
            src="/assets/light-effect.svg"
            width={350}
            height={350}
            alt="left img"
            className="w-full"
          />
        )}
        {isLightMode && (
          <Image
            src="/assets/light-effect-01.svg"
            width={350}
            height={350}
            alt="left img"
            className="w-full"
          />
        )}
      </div>

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

        <div className="w-full max-w-xl space-y-8 px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">
              Full Stack Developer | Banking Domain
            </h3>
            <p className="underline text-lg">Experience: 2+ years</p>
          </div>

          <ul className="space-y-6 list-disc list-inside text-justify justify-evenly">
            <li>
              <strong className="underline">
                Developed and maintained a Back Office Portal for Bank Employees
              </strong>
              <ul className="pl-6 list-disc list-inside text-justify">
                <li>
                  Built a secure, high-performance portal to streamline
                  administrative tasks.
                </li>
                <li>
                  Integrated role-based access control (RBAC) for secure data
                  handling.
                </li>
              </ul>
            </li>

            <li>
              <strong className="underline">
                Frontend Development with Modern Web Technologies
              </strong>
              <ul className="pl-6 list-disc list-inside text-justify">
                <li>
                  Utilized{" "}
                  <span className="font-semibold text-classic">
                    React, Next.js{" "}
                  </span>
                  and{" "}
                  <span className="font-semibold text-classic">TypeScript</span>{" "}
                  for responsive, user-friendly interfaces.
                </li>
                <li>
                  Implemented{" "}
                  <span className="font-semibold text-classic">
                    Redux, React-hook-form, Yup, Zod, Chakra UI, Framer motion
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-classic">
                    Material-UI
                  </span>{" "}
                  for consistent, accessible UI components.
                </li>
                <li>
                  Managed state efficiently and optimized API data handling.
                </li>
              </ul>
            </li>

            <li>
              <strong className="underline">
                Backend Development Using Java (Spring Boot) and Node.js
              </strong>
              <ul className="pl-6 list-disc list-inside text-justify">
                <li>
                  Developed scalable REST APIs with{" "}
                  <span className="font-semibold text-classic">
                    Spring Boot
                  </span>{" "}
                  to handle high-traffic operations.
                </li>
                <li>
                  Implemented data security with{" "}
                  <span className="font-semibold text-classic">
                    Keycloak [Identity and Access Management (IAM)]
                  </span>{" "}
                  and JWT authentication.
                </li>
                <li>
                  Integrated{" "}
                  <span className="font-semibold text-classic">PostgreSQL</span>{" "}
                  as the primary relational database for data storage.
                </li>
                <li>
                  Utilized{" "}
                  <span className="font-semibold text-classic">Redis</span> for
                  caching to improve performance and reduce database load.
                </li>
                <li>
                  Enhanced data processing for real-time banking operations.
                </li>
              </ul>
            </li>

            <li>
              <strong className="underline">
                Collaborated with Cross-functional Teams
              </strong>
              <ul className="pl-6 list-disc list-inside text-justify">
                <li>
                  Worked closely with product managers, designers, and QA for
                  quality assurance.
                </li>
                <li className="justify-evenly">
                  Conducted code reviews, contributed to documentation, and
                  ensured seamless project handover.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
