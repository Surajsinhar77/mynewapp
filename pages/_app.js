import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react';
import { ThemeProvider } from "next-themes";


export default function App({ Component,  pageProps:{ session, ...pageProps }}) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>      
        <Component {...pageProps} />    
      </SessionProvider>
    </ThemeProvider>
  )
}
