import "@/styles/globals.css";
import RootLayout from "@/layouts/layout";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
