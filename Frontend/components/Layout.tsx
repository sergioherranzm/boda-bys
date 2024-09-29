import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from 'next/head';

export const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Boda ByS</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div tw="flex flex-col justify-between min-h-screen items-stretch">
        <div tw="h-full w-full">
          <Navbar />
          <div tw="container mx-auto min-w-full">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
