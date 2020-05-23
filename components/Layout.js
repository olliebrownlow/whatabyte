import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";
import authButtons from "../config/authButtons";
import navButtons from "../config/navButtons";

import "./Layout.scss";
import "./index.scss";

const Layout = (props) => {
  const appTitle = `> WHATABYTE`;

  return (
    <div className="Layout">
      <Head>
        <title>WHATABYTE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Header appTitle={appTitle} authButtons={authButtons} />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;
