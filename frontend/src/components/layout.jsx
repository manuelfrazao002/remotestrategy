// Layout.js
import NavBar from "../components/navbar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
  </>
);

export default Layout;
