"use client";

import * as React from "react";
import { Moon, Sun, Loader } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  if (!mounted)
    return (
      <div className="h-10 min-w-12 max-w-12 flex justify-center items-center">
        <Loader className="animate-spin h-5 w-5" />
      </div>
    );

  return (
    <button onClick={handleToggle} className="mr-4 md:mr-0 md:pt-2">
      {isDarkMode ? (
        <Moon className="h-45 w-45" />
      ) : (
        <Sun className="h-45 w-45" />
      )}
    </button>
  );
}
