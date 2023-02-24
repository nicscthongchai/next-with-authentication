import "~styles/globals.css";
import type { AppProps } from "next/app";
import { AuthenticationProvider } from "~providers/authentication";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider {...pageProps}>
      <Component {...pageProps} />
    </AuthenticationProvider>
  );
}
