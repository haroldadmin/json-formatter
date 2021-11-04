import Head from "next/head";
import Footer from "./footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JSON Formatter</title>
      </Head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
};

export default Layout;
