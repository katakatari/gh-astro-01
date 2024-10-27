import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";

type Theme = "theme-light" | "dark" | "system";
const themes = ["theme-light", "dark", "system"] as const;

const displayTheme = (value: Theme, currentValue: Theme) => {
  if (value === currentValue) {
    return value === "theme-light" ? "light active" : `${value} active`;
  } else return value === "theme-light" ? "light" : value;
};

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<Theme>("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark = theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full aspect-square"
        >
          {theme === "theme-light" && (
            <LuSun className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}
          {theme === "dark" && (
            <LuMoon className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}
          {theme === "system" && (
            <LuMonitor className="h-[1.2rem] w-[1.2rem] transition-all" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-background capitalize"
      >
        {themes.map((item) => (
          <DropdownMenuItem
            key={item}
            onClick={() => setThemeState(item)}
            className="hover:bg-foreground/70 font-bold hover:text-background cursor-pointer"
          >
            {displayTheme(item, theme)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
