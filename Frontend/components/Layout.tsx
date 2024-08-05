import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from 'next/head';

export const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>GYM</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div tw="flex flex-col justify-between min-h-screen items-stretch bg-primary-000">
        <div tw="h-full w-full">
          <Navbar />
          <div tw="container mx-auto px-1">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
