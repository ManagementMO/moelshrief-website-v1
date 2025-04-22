
import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={theme.toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full bg-background/30 backdrop-blur-sm border border-white/10 shadow-lg hover:bg-background/50 transition-all duration-300 h-10 w-10 p-2"
      aria-label="Toggle theme"
    >
      {theme.mode === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-800" />
      )}
    </Button>
  );
};

export default ThemeToggle;
