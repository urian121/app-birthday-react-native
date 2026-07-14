const { colors } = require('./src/constants/colors.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        canvas: colors.canvas,
        surface: colors.surface,
        tabBar: colors.tabBar,
        field: {
          DEFAULT: colors.field,
          dark: colors.fieldDark,
        },
        button: colors.button,
        text: {
          DEFAULT: colors.text,
          muted: colors.textMuted,
          soft: colors.textSoft,
          onAccent: colors.textOnAccent,
        },
        accent: {
          DEFAULT: colors.accent,
          soft: colors.accentSoft,
        },
        today: colors.today,
      },
      borderRadius: {
        card: '18px',
        control: '14px',
        pill: '999px',
      },
    },
  },
  plugins: [],
};
