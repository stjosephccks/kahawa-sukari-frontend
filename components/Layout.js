import Footer from "./Footer";

const { default: NavBar } = require("./Navbar");
const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
