import { NextPage } from 'next';
import USCBanner from './USCBanner';
import Header from './Header';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <USCBanner />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
