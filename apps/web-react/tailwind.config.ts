// tailwind.config.ts
import type { Config } from 'tailwindcss';
import baseConfig from '@repo/ui/tailwind.config'; // Import the base configuration

const config: Config = {
  ...baseConfig, // Spread the base configuration
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      fontFamily: {
        ibmPlexMono: ['IBM Plex Mono', 'monospace'], // Add IBM Plex Mono font
      },
      fontSize: {
        'custom-size': '15px', // Define custom font size
      },
      lineHeight: {
        'custom-line-height': '36px', // Define custom line height
      },
      letterSpacing: {
        'custom-spacing': '0.03em', // Define custom letter spacing (3%)
      },
    },
  },
};

export default config;
