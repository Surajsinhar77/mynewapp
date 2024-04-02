import '@/styles/globals.css'
// import {SessionProvider} from 'next-auth/react';
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from 'recoil';

export default function App({ Component,  pageProps:{ ...pageProps }}) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        {/* <SessionProvider session={session}>       */}
          <Component {...pageProps} />    
        {/* </SessionProvider> */}
      </ThemeProvider>
    </RecoilRoot>
  )
};
