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
      // Slate scale
      slate1: 'hsl(206 30.0% 98.8%)',
      slate2: 'hsl(210 16.7% 97.6%)',
      slate3: 'hsl(209 13.3% 95.3%)',
      slate4: 'hsl(209 12.2% 93.2%)',
      slate5: 'hsl(208 11.7% 91.1%)',
      slate6: 'hsl(208 11.3% 88.9%)',
      slate7: 'hsl(207 11.1% 85.9%)',
      slate8: 'hsl(205 10.7% 78.0%)',
      slate9: 'hsl(206 6.0% 56.1%)',
      slate10: 'hsl(206 5.8% 52.3%)',
      slate11: 'hsl(206 6.0% 43.5%)',
      slate12: 'hsl(206 24.0% 9.0%)',

      // Mauve scale
      mauve1: 'hsl(300 20.0% 99.0%)',
      mauve2: 'hsl(300 7.7% 97.5%)',
      mauve3: 'hsl(294 5.5% 95.3%)',
      mauve4: 'hsl(289 4.7% 93.3%)',
      mauve5: 'hsl(283 4.4% 91.3%)',
      mauve6: 'hsl(278 4.1% 89.1%)',
      mauve7: 'hsl(271 3.9% 86.3%)',
      mauve8: 'hsl(255 3.7% 78.8%)',
      mauve9: 'hsl(252 4.0% 57.3%)',
      mauve10: 'hsl(253 3.5% 53.5%)',
      mauve11: 'hsl(252 4.0% 44.8%)',
      mauve12: 'hsl(260 25.0% 11.0%)',

      // Blue scale
      blue1: 'hsl(206 100% 99.2%)',
      blue2: 'hsl(210 100% 98.0%)',
      blue3: 'hsl(209 100% 96.5%)',
      blue4: 'hsl(210 98.8% 94.0%)',
      blue5: 'hsl(209 95.0% 90.1%)',
      blue6: 'hsl(209 81.2% 84.5%)',
      blue7: 'hsl(208 77.5% 76.9%)',
      blue8: 'hsl(206 81.9% 65.3%)',
      blue9: 'hsl(206 100% 50.0%)',
      blue10: 'hsl(208 100% 47.3%)',
      blue11: 'hsl(211 100% 43.2%)',
      blue12: 'hsl(211 100% 15.0%)',

      // Cyan scale
      cyan1: 'hsl(185 60.0% 98.7%)',
      cyan2: 'hsl(185 73.3% 97.1%)',
      cyan3: 'hsl(186 70.2% 94.4%)',
      cyan4: 'hsl(186 63.8% 90.6%)',
      cyan5: 'hsl(187 58.3% 85.4%)',
      cyan6: 'hsl(188 54.6% 78.4%)',
      cyan7: 'hsl(189 53.7% 68.7%)',
      cyan8: 'hsl(189 60.3% 52.5%)',
      cyan9: 'hsl(190 95.0% 39.0%)',
      cyan10: 'hsl(191 91.2% 36.8%)',
      cyan11: 'hsl(192 85.0% 31.0%)',
      cyan12: 'hsl(192 88.0% 12.5%)',

      // Green scale
      green1: 'hsl(136 50.0% 98.9%)',
      green2: 'hsl(138 62.5% 96.9%)',
      green3: 'hsl(139 55.2% 94.5%)',
      green4: 'hsl(140 48.7% 91.0%)',
      green5: 'hsl(141 43.7% 86.0%)',
      green6: 'hsl(143 40.3% 79.0%)',
      green7: 'hsl(146 38.5% 69.0%)',
      green8: 'hsl(151 40.2% 54.1%)',
      green9: 'hsl(151 55.0% 41.5%)',
      green10: 'hsl(152 57.5% 37.6%)',
      green11: 'hsl(153 67.0% 28.5%)',
      green12: 'hsl(155 40.0% 14.0%)',

      // Tomato scale
      tomato1: 'hsl(10 100% 99.4%)',
      tomato2: 'hsl(8 100% 98.4%)',
      tomato3: 'hsl(8 100% 96.6%)',
      tomato4: 'hsl(8 100% 94.3%)',
      tomato5: 'hsl(8 92.8% 91.0%)',
      tomato6: 'hsl(9 84.7% 86.3%)',
      tomato7: 'hsl(10 77.3% 79.5%)',
      tomato8: 'hsl(10 71.6% 71.0%)',
      tomato9: 'hsl(10 78.0% 54.0%)',
      tomato10: 'hsl(10 71.5% 50.0%)',
      tomato11: 'hsl(10 82.0% 43.5%)',
      tomato12: 'hsl(10 50.0% 13.5%)',

      // Crimson scale
      crimson1: 'hsl(332 100% 99.4%)',
      crimson2: 'hsl(330 100% 98.4%)',
      crimson3: 'hsl(331 85.6% 96.6%)',
      crimson4: 'hsl(331 78.1% 94.2%)',
      crimson5: 'hsl(332 72.1% 91.1%)',
      crimson6: 'hsl(333 67.0% 86.7%)',
      crimson7: 'hsl(335 63.5% 80.4%)',
      crimson8: 'hsl(336 62.3% 72.9%)',
      crimson9: 'hsl(336 80.0% 57.8%)',
      crimson10: 'hsl(336 73.7% 53.5%)',
      crimson11: 'hsl(336 75.0% 47.2%)',
      crimson12: 'hsl(340 65.0% 14.5%)',

      // Violet scale
      violet1: 'hsl(255 65.0% 99.4%)',
      violet2: 'hsl(252 100% 99.0%)',
      violet3: 'hsl(252 96.9% 97.4%)',
      violet4: 'hsl(252 91.5% 95.5%)',
      violet5: 'hsl(252 85.1% 93.0%)',
      violet6: 'hsl(252 77.8% 89.4%)',
      violet7: 'hsl(252 71.0% 83.7%)',
      violet8: 'hsl(252 68.6% 76.3%)',
      violet9: 'hsl(252 56.0% 57.5%)',
      violet10: 'hsl(251 48.1% 53.5%)',
      violet11: 'hsl(250 43.0% 48.0%)',
      violet12: 'hsl(254 60.0% 18.5%)',

      // Indigo scale
      indigo1: 'hsl(225 60.0% 99.4%)',
      indigo2: 'hsl(223 100% 98.6%)',
      indigo3: 'hsl(223 98.4% 97.1%)',
      indigo4: 'hsl(223 92.9% 95.0%)',
      indigo5: 'hsl(224 87.1% 92.0%)',
      indigo6: 'hsl(224 81.9% 87.8%)',
      indigo7: 'hsl(225 77.4% 82.1%)',
      indigo8: 'hsl(226 75.4% 74.5%)',
      indigo9: 'hsl(226 70.0% 55.5%)',
      indigo10: 'hsl(226 58.6% 51.3%)',
      indigo11: 'hsl(226 55.0% 45.0%)',
      indigo12: 'hsl(226 62.0% 17.0%)',

      // Semantic colors
      hiContrast: '$slate12',
      loContrast: 'white',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fontWeights: {
      1: '100',
      2: '300',
      3: '500',
      4: '700',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
  },
  media: {
    bp1: '(min-width: 375px)',
    bp2: '(min-width: 960px)',
    bp3: '(min-width: 1032px)',
  },
  utils: {
    // Abbreviated margin properties
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // Simultaneous width/height adjustment
    size: (value: string) => ({
      width: value,
      height: value,
    }),

    // Percentage-based n/12 system
    col: (value: number) => ({
      maxWidth: `${(100 / 12) * value}%`,
      flexBasis: `${(100 / 12) * value}%`,
    }),
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    // Slate dark scale
    slate1: 'hsl(200 7.0% 8.8%)',
    slate2: 'hsl(195 7.1% 11.0%)',
    slate3: 'hsl(197 6.8% 13.6%)',
    slate4: 'hsl(198 6.6% 15.8%)',
    slate5: 'hsl(199 6.4% 17.9%)',
    slate6: 'hsl(201 6.2% 20.5%)',
    slate7: 'hsl(203 6.0% 24.3%)',
    slate8: 'hsl(207 5.6% 31.6%)',
    slate9: 'hsl(206 6.0% 43.9%)',
    slate10: 'hsl(206 5.2% 49.5%)',
    slate11: 'hsl(206 6.0% 63.0%)',
    slate12: 'hsl(210 6.0% 93.0%)',

    // Mauve dark scale
    mauve1: 'hsl(246 6.0% 9.0%)',
    mauve2: 'hsl(240 5.1% 11.6%)',
    mauve3: 'hsl(241 5.0% 14.3%)',
    mauve4: 'hsl(242 4.9% 16.5%)',
    mauve5: 'hsl(243 4.9% 18.8%)',
    mauve6: 'hsl(244 4.9% 21.5%)',
    mauve7: 'hsl(245 4.9% 25.4%)',
    mauve8: 'hsl(247 4.8% 32.5%)',
    mauve9: 'hsl(252 4.0% 45.2%)',
    mauve10: 'hsl(247 3.4% 50.7%)',
    mauve11: 'hsl(253 4.0% 63.7%)',
    mauve12: 'hsl(256 6.0% 93.2%)',

    // Blue dark scale
    blue1: 'hsl(212 35.0% 9.2%)',
    blue2: 'hsl(216 50.0% 11.8%)',
    blue3: 'hsl(214 59.4% 15.3%)',
    blue4: 'hsl(214 65.8% 17.9%)',
    blue5: 'hsl(213 71.2% 20.2%)',
    blue6: 'hsl(212 77.4% 23.1%)',
    blue7: 'hsl(211 85.1% 27.4%)',
    blue8: 'hsl(211 89.7% 34.1%)',
    blue9: 'hsl(206 100% 50.0%)',
    blue10: 'hsl(209 100% 60.6%)',
    blue11: 'hsl(210 100% 66.1%)',
    blue12: 'hsl(206 98.0% 95.8%)',

    // Cyan dark scale
    cyan1: 'hsl(192 60.0% 7.2%)',
    cyan2: 'hsl(192 71.4% 8.2%)',
    cyan3: 'hsl(192 75.9% 10.8%)',
    cyan4: 'hsl(192 79.3% 12.8%)',
    cyan5: 'hsl(192 82.5% 14.6%)',
    cyan6: 'hsl(192 86.6% 16.9%)',
    cyan7: 'hsl(192 92.6% 20.1%)',
    cyan8: 'hsl(192 100% 24.5%)',
    cyan9: 'hsl(190 95.0% 39.0%)',
    cyan10: 'hsl(188 100% 40.0%)',
    cyan11: 'hsl(186 100% 42.2%)',
    cyan12: 'hsl(185 73.0% 93.2%)',

    // Green dark scale
    green1: 'hsl(146 30.0% 7.4%)',
    green2: 'hsl(155 44.2% 8.4%)',
    green3: 'hsl(155 46.7% 10.9%)',
    green4: 'hsl(154 48.4% 12.9%)',
    green5: 'hsl(154 49.7% 14.9%)',
    green6: 'hsl(154 50.9% 17.6%)',
    green7: 'hsl(153 51.8% 21.8%)',
    green8: 'hsl(151 51.7% 28.4%)',
    green9: 'hsl(151 55.0% 41.5%)',
    green10: 'hsl(151 49.3% 46.5%)',
    green11: 'hsl(151 50.0% 53.2%)',
    green12: 'hsl(137 72.0% 94.0%)',

    // Tomato dark scale
    tomato1: 'hsl(10 23.0% 9.4%)',
    tomato2: 'hsl(9 44.8% 11.4%)',
    tomato3: 'hsl(8 52.0% 15.3%)',
    tomato4: 'hsl(7 56.3% 18.0%)',
    tomato5: 'hsl(7 60.1% 20.6%)',
    tomato6: 'hsl(8 64.8% 24.0%)',
    tomato7: 'hsl(8 71.2% 29.1%)',
    tomato8: 'hsl(10 80.2% 35.7%)',
    tomato9: 'hsl(10 78.0% 54.0%)',
    tomato10: 'hsl(10 81.7% 59.0%)',
    tomato11: 'hsl(10 85.0% 62.8%)',
    tomato12: 'hsl(10 89.0% 96.0%)',

    // Crimson dark scale
    crimson1: 'hsl(335 20.0% 9.6%)',
    crimson2: 'hsl(335 32.2% 11.6%)',
    crimson3: 'hsl(335 42.5% 16.5%)',
    crimson4: 'hsl(335 47.2% 19.3%)',
    crimson5: 'hsl(335 50.9% 21.8%)',
    crimson6: 'hsl(335 55.7% 25.3%)',
    crimson7: 'hsl(336 62.9% 30.8%)',
    crimson8: 'hsl(336 74.9% 39.0%)',
    crimson9: 'hsl(336 80.0% 57.8%)',
    crimson10: 'hsl(339 84.1% 62.6%)',
    crimson11: 'hsl(341 90.0% 67.3%)',
    crimson12: 'hsl(332 87.0% 96.0%)',

    // Violet dark scale
    violet1: 'hsl(250 20.0% 10.2%)',
    violet2: 'hsl(255 30.3% 12.9%)',
    violet3: 'hsl(253 37.0% 18.4%)',
    violet4: 'hsl(252 40.1% 22.5%)',
    violet5: 'hsl(252 42.2% 26.2%)',
    violet6: 'hsl(251 44.3% 31.1%)',
    violet7: 'hsl(250 46.8% 38.9%)',
    violet8: 'hsl(250 51.8% 51.2%)',
    violet9: 'hsl(252 56.0% 57.5%)',
    violet10: 'hsl(251 63.2% 63.2%)',
    violet11: 'hsl(250 95.0% 76.8%)',
    violet12: 'hsl(252 87.0% 96.4%)',

    // Indigo dark scale
    indigo1: 'hsl(229 24.0% 10.0%)',
    indigo2: 'hsl(230 36.4% 12.9%)',
    indigo3: 'hsl(228 43.3% 17.5%)',
    indigo4: 'hsl(227 47.2% 21.0%)',
    indigo5: 'hsl(227 50.0% 24.1%)',
    indigo6: 'hsl(226 52.9% 28.2%)',
    indigo7: 'hsl(226 56.0% 34.5%)',
    indigo8: 'hsl(226 58.2% 44.1%)',
    indigo9: 'hsl(226 70.0% 55.5%)',
    indigo10: 'hsl(227 75.2% 61.6%)',
    indigo11: 'hsl(228 100% 75.9%)',
    indigo12: 'hsl(226 83.0% 96.3%)',

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
  },
});
