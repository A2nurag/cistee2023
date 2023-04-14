import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="CISTEE 2023 is being organized by Department of Electrical Engineering, National Institute of Technology Durgapur, in collaboration with MANIT Bhopal during December 16-17, 2023."
        />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
