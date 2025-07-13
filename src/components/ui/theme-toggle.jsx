"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex w-20 h-10 p-1 rounded-full bg-muted animate-pulse",
          className
        )}
      >
        <div className="w-8 h-8 rounded-full bg-muted-foreground/20" />
      </div>
    );
  }

  const handleThemeChange = (newTheme) => {
    setIsAnimating(true);
    setTheme(newTheme);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getCurrentTheme = () => {
    if (theme === "system") return "system";
    return resolvedTheme;
  };

  const currentTheme = getCurrentTheme();
  const isDark = currentTheme === "dark";
  const isSystem = theme === "system";

  return (
    <div
      className={cn(
        "relative flex items-center gap-2 p-1 rounded-full bg-gradient-to-r from-muted to-muted/80 border border-border/50 backdrop-blur-sm",
        "hover:shadow-lg hover:shadow-primary/10 transition-all duration-300",
        isAnimating && "animate-theme-switch",
        className
      )}
    >
      {/* System Theme Button */}
      <button
        onClick={() => handleThemeChange("system")}
        className={cn(
          "relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
          "hover:scale-110 active:scale-95",
          isSystem
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        )}
        title="System Theme"
      >
        <Monitor className="w-4 h-4" strokeWidth={1.5} />
        {isSystem && (
          <div className="absolute inset-0 rounded-full animate-glow-pulse" />
        )}
      </button>

      {/* Light Theme Button */}
      <button
        onClick={() => handleThemeChange("light")}
        className={cn(
          "relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
          "hover:scale-110 active:scale-95",
          currentTheme === "light"
            ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-400/30"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        )}
        title="Light Theme"
      >
        <Sun className="w-4 h-4" strokeWidth={1.5} />
        {currentTheme === "light" && (
          <div className="absolute inset-0 rounded-full animate-glow-pulse" />
        )}
      </button>

      {/* Dark Theme Button */}
      <button
        onClick={() => handleThemeChange("dark")}
        className={cn(
          "relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
          "hover:scale-110 active:scale-95",
          currentTheme === "dark"
            ? "bg-gradient-to-br from-slate-700 to-purple-600 text-white shadow-lg shadow-purple-500/30"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        )}
        title="Dark Theme"
      >
        <Moon className="w-4 h-4" strokeWidth={1.5} />
        {currentTheme === "dark" && (
          <div className="absolute inset-0 rounded-full animate-glow-pulse" />
        )}
      </button>

      {/* Theme indicator dot */}
      <div
        className={cn(
          "absolute top-1 w-2 h-2 rounded-full transition-all duration-300",
          isSystem && "bg-primary left-3",
          currentTheme === "light" && "bg-yellow-400 left-12",
          currentTheme === "dark" && "bg-purple-500 left-21"
        )}
      />
    </div>
  );
}

// Alternative compact toggle for mobile
export function CompactThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-12 h-6 rounded-full bg-muted animate-pulse",
          className
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-12 h-6 rounded-full transition-all duration-500 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        isDark
          ? "bg-gradient-to-r from-slate-700 to-purple-600"
          : "bg-gradient-to-r from-yellow-400 to-orange-500",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <div
        className={cn(
          "absolute top-0.5 w-5 h-5 rounded-full transition-all duration-500 ease-in-out",
          "flex items-center justify-center",
          isDark
            ? "left-0.5 bg-slate-800 text-purple-300"
            : "left-6 bg-white text-orange-500"
        )}
      >
        {isDark ? (
          <Moon className="w-3 h-3" strokeWidth={2} />
        ) : (
          <Sun className="w-3 h-3" strokeWidth={2} />
        )}
      </div>

      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
          "hover:opacity-100",
          isDark ? "bg-purple-500/20" : "bg-yellow-400/20"
        )}
      />
    </button>
  );
}
