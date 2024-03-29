"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      setTheme(newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <Button variant="ghost" className="w-10 px-0" onClick={toggleTheme}>
      {isDarkMode ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-100 dark:hover:-rotate-45" />
      ) : (
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all hover:rotate-45 dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
