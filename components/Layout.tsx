import Head from "next/head";
import Footer from "./Footer";

const Title = "JSON Formatter";
const Description =
  "Dead simple tool to format (small) JSON files in the browser";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="JSON Formatter" />
        <meta name="description" content={Description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={Title} />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:description" content={Description} />
        <title>{Title}</title>
      </Head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </>
  );
};

export default Layout;
