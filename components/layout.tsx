import { NextPage } from "next";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <div id="usc-banner" className="bg-black overflow-auto">
        <a className="float-right">
          <img
            src={require("../images/usc-shield-name-white.png")}
            className="h-[38px] w-[176px] m-[11px]"
            alt="USC Logo"
          />
        </a>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
