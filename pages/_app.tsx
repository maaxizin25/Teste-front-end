import type { AppProps } from "next/app";
import { Layout } from "../components/layout/layout";
import { GlobalStyle } from "../style/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
