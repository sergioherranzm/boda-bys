import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Layout } from '../components/Layout';
import GlobalStyles from './../styles/GlobalStyles';
import '../styles/customStyles.css';
import { fetcher } from '../lib/fetcher';

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <SWRConfig value={{ fetcher }}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  </CacheProvider>
);

export default App;
