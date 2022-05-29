import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BackgroundLine from '@components/background-line';
import Header from '@components/headers/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1640px] w-5/6 m-auto">
        <BackgroundLine />
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
