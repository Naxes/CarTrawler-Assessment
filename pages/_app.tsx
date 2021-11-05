import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { normalize } from 'stitches-normalize-css';
import { globalCss, darkTheme } from 'stitches.config';
import CarRentalProvider from '@/providers/CarRentalProvider';

export const globalStyles = globalCss(...normalize, {
  'html, body': {
    margin: 0,
    height: '100%',
    backgroundColor: '$loContrast',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, ' +
      'Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  '.docs-story > div:first-child': {
    margin: 0,
  },
  '::selection': {
    color: '$loContrast',
    background: '$crimson10',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      value={{
        dark: darkTheme.className,
        light: 'light-theme',
      }}
    >
      <CarRentalProvider>
        <Component {...pageProps} />
      </CarRentalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
