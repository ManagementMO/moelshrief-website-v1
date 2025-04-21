import React, { createContext, useState, useContext } from 'react';
import { ThemeContextType, ThemeContext } from '@/hooks/use-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Default cyberpunk theme values
  const defaultTheme: ThemeContextType = {
    // Neon magenta
    primaryHue: 268,
    primarySaturation: 92,
    primaryLightness: 67,
    
    // Neon cyan
    secondaryHue: 195,
    secondarySaturation: 92,
    secondaryLightness: 67,
    
    // Neon yellow
    accentHue: 52,
    accentSaturation: 92,
    accentLightness: 67,
    
    // Dark blue-black
    backgroundHue: 225,
    backgroundSaturation: 70,
    backgroundLightness: 3,
  };
  
  const [theme] = useState<ThemeContextType>(defaultTheme);
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
