import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
     background: '#192A32',
     card: '#1F3540',
     neutral: '#A8BEC9',
     xPlayer: '#31C3BB',
     oPlayer: '#F2B237'
    },
    space: {
      md: '1rem'
    },
    radii: {
      md: '15px'
    },
    shadows: {
      md: '0px 12px 0px 0 #0f212b',
      xPlayer: '0px 12px 0px 0 #168B87',
      oPlayer: '0px 12px 0px 0 #CB8C14'
    }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
});