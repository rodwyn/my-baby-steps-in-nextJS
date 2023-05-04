import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Page } from "../types/page";

type NextPageWithLayout = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: NextPageWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
