import Head from "next/head";
import Footer from "./footer/footer";
import Navbar from "./nav/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
      <Footer />
    </>
  );
};

export default Layout;
