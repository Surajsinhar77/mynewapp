import '@/pages/styles/globals.css';
// import {SessionProvider} from 'next-auth/react';
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from 'recoil';
import Layout from './components/Layout';

export default function App({ Component,  pageProps:{ ...pageProps }}) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        {/* <SessionProvider session={session}>       */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        {/* </SessionProvider> */}
      </ThemeProvider>
    </RecoilRoot>
  )
};
