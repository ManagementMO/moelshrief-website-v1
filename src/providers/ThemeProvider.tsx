
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeContextType, ThemeContext } from '@/hooks/use-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Check for user's preferred color scheme or saved preference
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  
  // Define theme values for dark and light modes
  const themes = {
    dark: {
      // Deep purple (dark mode primary)
      primaryHue: 268,
      primarySaturation: 92,
      primaryLightness: 67,
      
      // Cyan (dark mode secondary)
      secondaryHue: 195,
      secondarySaturation: 92,
      secondaryLightness: 67,
      
      // Yellow accent
      accentHue: 52,
      accentSaturation: 92,
      accentLightness: 67,
      
      // Dark blue-black background
      backgroundHue: 225,
      backgroundSaturation: 70,
      backgroundLightness: 3,
    },
    light: {
      // Lighter purple (light mode primary)
      primaryHue: 268,
      primarySaturation: 80,
      primaryLightness: 60,
      
      // Light blue (light mode secondary)
      secondaryHue: 210,
      secondarySaturation: 85,
      secondaryLightness: 70,
      
      // Amber accent
      accentHue: 45,
      accentSaturation: 90,
      accentLightness: 60,
      
      // Very light gray background
      backgroundHue: 210,
      backgroundSaturation: 10,
      backgroundLightness: 98,
    }
  };
  
  // Set theme in body class
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
  }, [mode]);
  
  // Create the theme context value with both theme values and toggle function
  const theme: ThemeContextType = {
    ...themes[mode],
    mode,
    toggleTheme: () => setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark')
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
