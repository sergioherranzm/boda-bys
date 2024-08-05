import { UserProvider } from '@auth0/nextjs-auth0';
import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Layout } from '../components/Layout';
import GlobalStyles from './../styles/GlobalStyles';
import '../styles/customStyles.css';
import { fetcher } from '../lib/fetcher';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <CacheProvider value={cache}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </CacheProvider>
  </UserProvider>
);

export default App;
