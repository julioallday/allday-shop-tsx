import "../style/global.css";
import type { AppProps } from "next/app";
import NavBar from "./components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <><Component {...pageProps} /></>
  
  
  
  )
}

export default MyApp;
