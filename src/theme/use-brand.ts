// File: src/theme/use-brand.ts

import { brandOne } from "../../config/brands/brand-one";


export const useBrand = () => {
  // In future, you can switch between light/dark or multiple brands
  return {
    colors: brandOne.colors,
    typography: brandOne.typography,
    spacing: brandOne.spacing,
    
    animation: brandOne.animation, // ✅ animation tokens
  };
};
