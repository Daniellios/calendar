export type ThemeType = typeof theme

export const theme = {
  // FONTS
  fonts: {
    title: 'Space Grotesk, sans-serif',
    main: 'Space Grotesk, sans-serif',
  },
  // COLORS
  colors: {
    primary1: '#000000',
    white: '#FFFFFF',
    gray: 'rgba(170, 170, 170, 0.8)',
  },
  // BREAKPOINTS
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },
}

export default theme
