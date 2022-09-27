import "../style/global.css";
import type { AppProps } from "next/app";

import CookieConsent, { Cookies } from "react-cookie-consent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <><Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        cookieName="primeiroAcessoAPagina"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Este site usa cookies para melhorar a experiência do usuário.{" "}
        <span style={{ fontSize: "10px" }}>Um presente de boas vindas!</span>
      </CookieConsent>
    </>
  )
}

export default MyApp;
