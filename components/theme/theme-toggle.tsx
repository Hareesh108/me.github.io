"use client";

import * as React from "react";
import { Moon, Sun, Loader } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; // Import Shadcn UI button

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
    <div className="h-10 min-w-14 max-w-1min-w-14">
      <Button onClick={handleToggle} variant="link">
        {isDarkMode ? (
          <Moon className="h-10 w-10" />
        ) : (
          <Sun className="h-10 w-10" />
        )}
      </Button>
    </div>
  );
}
