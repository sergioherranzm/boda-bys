import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import GlobalStyles from './../styles/GlobalStyles';
import '../styles/customStyles.css';

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;
