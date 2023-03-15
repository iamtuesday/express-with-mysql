import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "swiper/css";
import { Layout } from "../components/layouts/Layout";
import { Favicon } from "../components/globals";
import { AuthProvider } from "../context/auth.context";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>S3</title>
        <Favicon />
      </Head>
      <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </AuthProvider>
    </>
  );
}
