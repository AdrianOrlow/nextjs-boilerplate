import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '@layout';
import theme from '@theme';
import 'modern-normalize/modern-normalize.css';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

config.autoAddCss = false;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
