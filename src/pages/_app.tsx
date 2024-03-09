// _app.tsx
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DarkModeProvider } from "components/DarkModeContext";
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </SessionProvider>
  );
}

export default MyApp;
