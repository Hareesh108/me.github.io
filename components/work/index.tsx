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
    <div id="skills" className="max-w-screen-xl mt-6 md:mt-10 mx-4 xl:mx-auto">
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

        <div className="w-full space-y-8 px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-6 text-justify">
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
    </div>
  );
}
