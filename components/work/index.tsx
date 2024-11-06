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

      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-8 text-center">Work</h2>
      </div>
    </div>
  );
}
