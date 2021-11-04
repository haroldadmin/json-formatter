import Head from "next/head";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JSON Formatter</title>
        <meta name="title" content="JSON Formatter" />
        <meta
          name="description"
          content="Dead simple tool to format (small) JSON files"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JSON Formatter" />
        <meta
          property="og:description"
          content="Dead simple tool to format (small) JSON files in the browser"
        />
        <meta property="twitter:title" content="JSON Formatter" />
        <meta
          property="twitter:description"
          content="Dead simple tool to format (small) JSON files in the browser"
        />
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
